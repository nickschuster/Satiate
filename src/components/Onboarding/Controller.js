import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { TrackerStates } from "../Tracker/TrackerStates";
import { OnboardingStates } from "./OnboardingStates";
import { SetGoalsAndUsername } from "./SetGoals";

export const OnboardingController = ({ setTrackerState }) => {
  const [onboardingState, setOnboardingState] = useState(
    OnboardingStates.setGoals
  );

  const getOnboardingState = () => {
    if (onboardingState === OnboardingStates.exit) {
      return null;
    } else if (onboardingState === OnboardingStates.setGoals) {
      return (
        <SetGoalsAndUsername
          setOnboardingState={setOnboardingState}
          finishOnboarding={finishOnboarding}
        />
      );
    }
  };

  const finishOnboarding = () => {
    setTrackerState(TrackerStates.default);
  };

  return (
    <>
      <Container>{getOnboardingState()}</Container>
    </>
  );
};
