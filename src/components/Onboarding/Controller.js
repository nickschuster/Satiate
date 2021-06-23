import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { TrackerStates } from "../Tracker/TrackerStates";
import { FinishOnboarding } from "./FinishOnboarding";
import { OnboardingStates } from "./OnboardingStates";
import { SetGoals } from "./SetGoals";

export const OnboardingController = ({ setTrackerState, currentUser }) => {
  const [onboardingState, setOnboardingState] = useState(
    OnboardingStates.setGoals
  );
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [parameters, setParameters] = useState(undefined);

  // Check and set the users onBoardingIndex. If not avaible start from the
  // beginning.
  useEffect(() => {
    (async () => {
      try {
        console.log("Onboarding Controller");
        // In order to proceed a user must be logged in.
        if (currentUser && !parameters) {
          console.log(currentUser.id);
          console.log(parameters);
          setParameters("test");
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

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
