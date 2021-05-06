import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
import { createUser, createDay, updateDay } from "../../graphql/mutations";
import { useNotification } from "../Notification";

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
  const { addNotification } = useNotification();
  const [trackerState, setTrackerStateHook] = useState(undefined);
  const [meals, setMeals] = useState([]);
  const [currentDay, setCurrentDay] = useState(moment().unix() / 86400);
  const [savedEditMeal, setEditMeal] = useState(undefined);
  const [userData, setUserData] = useState();

  // Create a new user or get exisiting user data.
  useEffect(() => {
    (async () => {
      try {
        if (user) {
          console.log("Get user data.");

          const UID = user.username;
          const username = user.attributes.preferred_username;
          const userInfo = (
            await API.graphql(graphqlOperation(getUser, { id: UID }))
          ).data.getUser;

          if (userInfo) {
            // The user exists.
            setUserData(userInfo);
          } else {
            // Its a new user (never signed in before).
            const newUser = (
              await API.graphql(
                graphqlOperation(createUser, {
                  input: { id: UID, username: username },
                })
              )
            ).data.createUser;
            setUserData(newUser);
          }
        }
      } catch (e) {
        console.log(e);

        addNotification("Could not get your saved data.");
      }
    })();
  }, [user, addNotification]);

  // Set the meals of the current day.
  useEffect(() => {
    if (userData) {
      console.log("Loading user data.");

      const dayId = Math.floor(currentDay);
      const UID = userData.id;
      const meals = findMealsForDay(dayId, userData);

      if (meals) {
        // Day exists.
        setMeals(meals);
      } else {
        // Its a new day.
        (async () => {
          try {
            await API.graphql(
              graphqlOperation(createDay, {
                input: {
                  id: dayId,
                  userID: UID,
                  pretty: currentDay,
                },
              })
            );
          } catch (e) {
            console.log(e);

            addNotification(
              "Could not create a new day. Your meals will not be saved."
            );
          }
        })();
      }
    }
  }, [currentDay, userData, addNotification]);

  // Save the meal changes to the user.
  useEffect(() => {
    (async () => {
      try {
        if (userData) {
          console.log("Save user data.");

          const UID = userData.id;
          const dayId = Math.floor(currentDay);

          await API.graphql(
            graphqlOperation(updateDay, {
              input: {
                id: dayId,
                userID: UID,
                pretty: currentDay,
                meals: [...meals],
              },
            })
          );
        }
      } catch (e) {
        console.log(e);

        addNotification("Could not save changes.");
      }
    })();
  }, [meals, currentDay, userData, addNotification]);

  // Helper method for getting the meals for a specific day.
  const findMealsForDay = (dayId, userData) => {
    const days = userData.days.items;
    const day = days.find((day) => parseInt(day.id) === dayId);
    return day.meals;
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
  };

  // Delete a meal from the current day.
  const deleteMeal = (key) => {
    setMeals((prev) => {
      const index = meals.findIndex((meal) => meal.key === key);
      prev.splice(index, 1);
      return [...prev];
    });
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
        <Totals getTotals={getTotals} goals={{}} getPoints={() => "----"} />
        <Footer />
      </Container>
      <div className={classes.formContainer}>{activeForm()}</div>
    </>
  );
};
