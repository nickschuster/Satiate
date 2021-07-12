import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
import { Meals } from "./Meals";
import { Totals } from "./Totals";
import { MealControl } from "./MealControl";
import { TrackerStates } from "./TrackerStates";
import { Keygen } from "../../util/keygen";
import moment from "moment";
import { API, graphqlOperation } from "@aws-amplify/api";
import { getUser } from "../../graphql/queries";
import {
  createUser,
  createDay,
  updateDay,
  updateParameter,
  createParameter,
} from "../../graphql/mutations";
import {
  findMealsForDay,
  formatMealsForLoad,
  formatMealsForSave,
} from "../../util/mealFormatting";
import { OnboardingController } from "../Onboarding/Controller";
import { UserParameters } from "../../util/userParameters";
import { OnboardingStates } from "../Onboarding/OnboardingStates";

const useStyles = makeStyles((theme) => ({
  mealsContainer: {
    position: "absolute",
    display: "block",
    top: 150,
    left: "50%",
    transform: "translate(-50%)",
    textAlign: "center",
    maxWidth: 500,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      top: 120,
    },
  },
  formContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

export const TrackerController = ({ user }) => {
  const classes = useStyles();
  const [trackerState, setTrackerStateHook] = useState(TrackerStates.newUser);
  const [meals, setMeals] = useState([]);
  const [currentDay, setCurrentDay] = useState(moment().unix() / 86400);
  const [savedEditMeal, setEditMeal] = useState(undefined);
  const [userData, setUserData] = useState();
  const [goals, setGoals] = useState();
  const [onboardingState, setOnboardingState] = useState(undefined);

  // Load the current user.
  useEffect(() => {
    (async () => {
      try {
        if (user) {
          console.log("Get user.");
          let userInfo = (
            await API.graphql(graphqlOperation(getUser, { id: user.username }))
          ).data.getUser;
          if (userInfo) {
            // User exists.
            setUserData(userInfo);
          } else {
            // New user.
            userInfo = (
              await API.graphql(
                graphqlOperation(createUser, {
                  input: {
                    id: user.username,
                    username: user.attributes.preferred_username,
                  },
                })
              )
            ).data.createUser;
            setUserData(userInfo);
          }

          // Trigger initial load.
          setCurrentDay(moment().unix() / 86400);

          // Setup the user parameters.
          populateParameters(userInfo);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [user]);

  // Save the current onboardingState.
  useEffect(() => {
    (async () => {
      try {
        // Only save if this is not the default state.
        if (onboardingState !== undefined) {
          let exists = userData.parameters.items.find(
            (param) => param.key === UserParameters.onboardingState
          );
          if (exists) {
            await API.graphql(
              graphqlOperation(updateParameter, {
                input: {
                  id: exists.id,
                  userID: userData.id,
                  key: UserParameters.onboardingState,
                  value: `${onboardingState}`,
                },
              })
            );
          } else {
            await API.graphql(
              graphqlOperation(createParameter, {
                input: {
                  userID: userData.id,
                  key: UserParameters.onboardingState,
                  value: `${onboardingState}`,
                },
              })
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [onboardingState, userData]);

  // Load meals whenever the day changes.
  useEffect(() => {
    loadMeals();
    // eslint-disable-next-line no-use-before-define
  }, [currentDay, loadMeals]);

  // Load meals for day.
  const loadMeals = useCallback(async () => {
    if (userData) {
      console.log("Load");
      const pretty = currentDay;
      const dayID = Math.floor(pretty);
      const meal = findMealsForDay(dayID, userData);
      const goals = getGoalsFromDay(dayID, userData) || getGoalsFromUser(userData);

      if (meal !== undefined) {
        setMeals(formatMealsForLoad(meal));
      } else {
        try {
          setMeals([]);
          await API.graphql(
            graphqlOperation(createDay, {
              input: {
                id: `${dayID} ${userData.id}`,
                userID: userData.id,
                pretty: pretty,
                calorieGoal: goals.calories,
                carbGoal: goals.carbs,
                fatGoal: goals.fat,
                proteinGoal: goals.protein,
              },
            })
          );
        } catch (e) {
          console.log(e);
        }
      }

      setGoals(goals)
    }
  }, [currentDay, userData]);

  // Save meals for day.
  const saveMeals = async () => {
    console.log("Save");
    try {
      await API.graphql(
        graphqlOperation(updateDay, {
          input: {
            id: `${Math.floor(currentDay)} ${userData.id}`,
            userID: userData.id,
            pretty: currentDay,
            meals: [...formatMealsForSave(meals)],
          },
        })
      );
      setUserData((prev) => {
        let day = prev.days.items.findIndex(
          (day) => day.id === `${Math.floor(currentDay)} ${userData.id}`
        );
        let formatted = formatMealsForSave(meals);
        if (!(day === -1)) {
          prev.days.items[day].meals = formatted;
        } else {
          prev.days.items.push({
            id: `${Math.floor(currentDay)} ${userData.id}`,
            usedID: userData.id,
            meals: formatted,
          });
        }
        return { ...prev };
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Populate the various parameter states depending on
  // current user information.
  const populateParameters = (userInfo) => {
    // Onboarding.
    setOnboardingState(() => {
      let state = userInfo.parameters.items.find(
        (param) => param.key === UserParameters.onboardingState
      );
      if (!state) state = OnboardingStates.setGoals;
      else state = parseInt(state.value);
      return state;
    });
  };

  // Increase the current day by one.
  const nextDay = () => {
    setCurrentDay((prev) => {
      return prev + 1;
    });
  };

  // Decrease the current day by one.
  const prevDay = () => {
    setCurrentDay((prev) => {
      return prev - 1;
    });
  };

  // Calculate the total for a meal for a given type.
  const getMealTotal = (meal, type) => {
    if (!meal) return 0;

    let total = 0;
    for (const ing of Object.entries(meal.ingredients)) {
      total += parseInt(ing[1][type], 10);
    }
    return total;
  };

  // Calculate the total for all meals for a given type.
  const getTotals = (type) => {
    let total = 0;
    for (const meal of meals) {
      total += getMealTotal(meal.content, type);
    }
    return total;
  };

  // Set the current tracker state.
  const setTrackerState = (state) => {
    setTrackerStateHook(state);
  };

  // Add a meal to the current day.
  const addMeal = (meal) => {
    setMeals((prev) => {
      prev.push({
        key: Keygen.getKey(),
        content: meal,
      });
      return [...prev];
    });
    saveMeals();
  };

  // Save the meal to be edited.
  const saveEditMeal = (key) => {
    setEditMeal(() => {
      const saved = meals.find((meal) => meal.key === key);
      return { ...saved };
    });
  };

  // Replace the current meal content with the updated content.
  const editMeal = (editMeal) => {
    setMeals((prev) => {
      const update = prev.find((meal) => meal.key === savedEditMeal.key);
      update.content = editMeal;
      return [...prev];
    });
    saveMeals();
  };

  // Delete a meal from the current day.
  const deleteMeal = (key) => {
    setMeals((prev) => {
      const index = meals.findIndex((meal) => meal.key === key);
      prev.splice(index, 1);
      return [...prev];
    });
    saveMeals();
  };

  // Save the onboarding goals.
  const saveGoalsToUser = (goals) => {
    try {
      // Save to user.
      API.graphql(
        graphqlOperation(createParameter, {
          input: {
            userID: userData.id,
            key: UserParameters.calorieGoal,
            value: goals.calories,
          },
        })
      );
      API.graphql(
        graphqlOperation(createParameter, {
          input: {
            userID: userData.id,
            key: UserParameters.fatGoal,
            value: goals.fat,
          },
        })
      );
      API.graphql(
        graphqlOperation(createParameter, {
          input: {
            userID: userData.id,
            key: UserParameters.carbGoal,
            value: goals.carbs,
          },
        })
      );
      API.graphql(
        graphqlOperation(createParameter, {
          input: {
            userID: userData.id,
            key: UserParameters.proteinGoal,
            value: goals.protein,
          },
        })
      );

      // Save to current day.
      await API.graphql(
        graphqlOperation(updateDay, {
          input: {
            id: `${Math.floor(currentDay)} ${userData.id}`,
            userID: userData.id,
            pretty: currentDay,
            calorieGoal: goals.calories,
            proteinGoal: goals.protein,
            fatGoal: goals.fat,
            carbGoal: goals.carbs,
          },
        })
      );

      // Set goals manually to avoid refetch.
      setGoals(() => {
        let packaged = {};
        packaged["calories"] = goals.calorieGoal.value;
        packaged["fat"] = goals.fatGoal.value;
        packaged["carbs"] = goals.carbGoal.value;
        packaged["protein"] = goals.proteinGoal.value;
        return { ...packaged };
      })
    } catch (e) {
      console.log(e);
    }
  };

  // If the current day exists get the goal amounts for it.
  const getGoalsFromDay = (dayId, userData) => {
    const days = userData.days.items;
    const day = days.find((day) => day.id === `${dayId} ${userData.id}`);
    if(day) {
      return {
        calories: day.calorieGoal,
        fat: day.fatGoal,
        carbs: day.carbGoal,
        protein: day.proteinGoal,
      }
    }
    return undefined;
  }
  
  // Get the saved goal amounts from the user profile.
  const getGoalsFromUser = (userData) => {
    let calories = userInfo.parameters.items.find(
      (param) => param.key === UserParameters.calorieGoal
    ).value;
    let fat = userInfo.parameters.items.find(
      (param) => param.key === UserParameters.fatGoal
    ).value;
    let carbs = userInfo.parameters.items.find(
      (param) => param.key === UserParameters.carbsGoal
    ).value;
    let protein  = userInfo.parameters.items.find(
      (param) => param.key === UserParameters.proteinGoal
    ).value;
    
    return {
      calories,
      fat,
      carbs,
      protein,
    }
  }

  // Finish the onboarding process.
  const finishOnboarding = () => {
    setTrackerState(TrackerStates.default);
  };

  // Detemine what form to show based on tracker state.
  const activeForm = () => {
    if (trackerState === TrackerStates.addMeal) {
      return (
        <MealControl setTrackerState={setTrackerState} addMeal={addMeal} />
      );
    } else if (trackerState === TrackerStates.editMeal) {
      return (
        <MealControl
          setTrackerState={setTrackerState}
          addMeal={editMeal}
          editMeal={savedEditMeal.content}
        />
      );
    } else if (trackerState === TrackerStates.newUser) {
      return (
        <OnboardingController
          finishOnboarding={finishOnboarding}
          onboardingState={onboardingState}
          setOnboardingState={setOnboardingState}
          saveGoalsToUser={saveGoalsToUser}
        />
      );
    }
    return null;
  };

  return (
    <>
      <Header currentDay={currentDay} nextDay={nextDay} prevDay={prevDay} />
      <Container className={classes.mealsContainer}>
        <Meals
          setTrackerState={setTrackerState}
          meals={meals}
          getMealTotal={getMealTotal}
          deleteMeal={deleteMeal}
          saveEditMeal={saveEditMeal}
        />
        <Totals
          getTotals={getTotals}
          goals={goals}
          getPoints={() => "----"}
        />
        <Footer />
      </Container>
      <div className={classes.formContainer}>{activeForm()}</div>
    </>
  );
};
