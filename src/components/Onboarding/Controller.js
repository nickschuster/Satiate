import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { TrackerStates } from "../Tracker/TrackerStates";
import { FinishOnboarding } from "./finishOnboarding";
import { OnboardingStates } from "./OnboardingStates";
import { SetGoals } from "./SetGoals";

export const OnboardingController = ({ setTrackerState }) => {
  const [onboardingState, setOnboardingState] = useState(
    OnboardingStates.setGoals
  );

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
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 5000);
    });
    //setOnboardingState(OnboardingStates.exit);
    //setTrackerState(TrackerStates.default);
  };

  // Display the onboarding form based on current onboarding state.
  const getOnboardingState = () => {
    if (onboardingState === OnboardingStates.exit) {
      return null;
    } else if (onboardingState === OnboardingStates.setGoals) {
      return <SetGoals saveGoals={saveGoals} />;
    } else if (onboardingState === OnboardingStates.finish) {
      return <FinishOnboarding />;
    }
  };

  return (
    <>
      <Container>{getOnboardingState()}</Container>
    </>
  );
};
