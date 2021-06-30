import { Container } from "@material-ui/core";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listParameters } from "../../graphql/queries";
import { TrackerStates } from "../Tracker/TrackerStates";
import { FinishOnboarding } from "./FinishOnboarding";
import { OnboardingStates } from "./OnboardingStates";
import { SetGoals } from "./SetGoals";
import { UserParameters } from "../../util/userParameters";
import { createParameter, updateParameter } from "../../graphql/mutations";
import { SettingsBackupRestoreSharp } from "@material-ui/icons";

export const OnboardingController = ({
  setTrackerState,
  userOnboardingState,
}) => {
  const [onboardingState, setOnboardingState] = useState(
    OnboardingStates.setGoals
  );
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Save the current onboardingState when it changes.
  const saveOnboardingState = async () => {
    try {
      // Update the parameter.
      let result;
      if (userOnboardingState.id) {
        console.log("Update");
        result = await API.graphql(
          graphqlOperation(updateParameter, {
            input: {
              value: onboardingState.value,
            },
            condition: {
              and: {
                key: {
                  eq: UserParameters.onboardingState,
                },
                userID: {
                  eq: userOnboardingState.userID,
                },
              },
            },
          })
        );
      } else {
        console.log("create");
        // Create the parameter.
        result = API.graphql(
          graphqlOperation(createParameter, {
            input: {
              userID: userOnboardingState.userID,
              key: UserParameters.onboardingState,
              value: onboardingState,
            },
          })
        );
      }
      setTasks((prev) => {
        prev.push(result);
        return { ...prev };
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Save the set goals to parent state.
  const saveGoals = () => {
    console.log("Save goals.");
    setOnboardingState(OnboardingStates.finish);
    finishOnboarding();
  };

  // Save the profile details to parent state.
  // const saveProfile = () => {
  //   console.log("Save profile.");
  // };

  // Finish the onboarding process.
  const finishOnboarding = async () => {
    setCreatingAccount(true);
    await Promise.all(tasks);
    await stopLoading();
    setTrackerState(TrackerStates.default);
    setOnboardingState(OnboardingStates.exit);
    saveOnboardingState();
  };

  // Helper function for showing succesful account creation. Waits for
  // 500 ms to show status.
  const stopLoading = async () => {
    setCreatingAccount(false);
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  // Display the onboarding form based on current onboarding state.
  const getOnboardingState = () => {
    console.log("Rerender");
    if (onboardingState === OnboardingStates.exit) {
      return <></>;
    } else if (onboardingState === OnboardingStates.setGoals) {
      return <SetGoals saveGoals={saveGoals} />;
    } else if (onboardingState === OnboardingStates.finish) {
      return <FinishOnboarding isLoading={creatingAccount} />;
    }
  };

  return (
    <>
      <Container>{getOnboardingState()}</Container>
    </>
  );
};
