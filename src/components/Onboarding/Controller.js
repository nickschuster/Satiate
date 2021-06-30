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

export const OnboardingController = ({
  setTrackerState,
  userOnboardingState,
}) => {
  const [onboardingState, setOnboardingState] = useState(
    userOnboardingState.value || OnboardingStates.setGoals
  );
  const [creatingAccount, setCreatingAccount] = useState(false);

  // Save the current onboardingState when it changes.
  const saveOnboardingState = async () => {
    try {
      // Update the parameter.
      if (userOnboardingState.id) {
        console.log("Update");
        await API.graphql(
          graphqlOperation(updateParameter, {
            input: {
              id: userOnboardingState.id,
              key: UserParameters.onboardingState,
              value: onboardingState,
            },
          })
        );
      } else {
        console.log("create");
        // Create the parameter.
        await API.graphql(
          graphqlOperation(createParameter, {
            input: {
              userID: userOnboardingState.userID,
              key: UserParameters.onboardingState,
              value: onboardingState,
            },
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Save the set goals to parent state.
  const saveGoals = () => {
    console.log("Save goals.");
    saveOnboardingState();
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
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
    });
    await stopLoading();
    setTrackerState(TrackerStates.default);
    // setOnboardingState(OnboardingStates.exit);
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
    if (onboardingState === OnboardingStates.exit) {
      return null;
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
