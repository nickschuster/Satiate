import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { FinishOnboarding } from "./FinishOnboarding";
import { OnboardingStates } from "./OnboardingStates";
import { SetGoals } from "./SetGoals";
import { ProfileSetup } from "./ProfileSetup";

export const OnboardingController = ({
  finishOnboarding,
  onboardingState,
  setOnboardingState,
  saveGoalsToUser,
}) => {
  const [isLoading, setLoading] = useState(false);

  // Save the set goals to parent state.
  const saveGoals = (goals) => {
    saveGoalsToUser(goals);
    setOnboardingState(OnboardingStates.finish);
    completeTasks();
  };

  // Save the profile details to parent state.
  // const saveProfile = () => {
  //   console.log("Save profile.");
  // };

  // Wait for all setup tasks to finish. Display status.
  const completeTasks = async () => {
    setLoading(true);

    // Wait for use setup tasks to finish.
    // Simulate tasks.
    await new Promise((resolve) => {
      setTimeout(resolve, 2500);
    });

    setLoading(false);

    // Wait for animation to finish.
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    setOnboardingState(OnboardingStates.exit);
    finishOnboarding();
  };

  // Display the onboarding form based on current onboarding state.
  const getOnboardingState = () => {
    if (onboardingState === OnboardingStates.setGoals) {
      return <SetGoals saveGoals={saveGoals} />;
    } else if (onboardingState === OnboardingStates.setProfile) {
      return <ProfileSetup />;
    } else if (onboardingState === OnboardingStates.finish) {
      return <FinishOnboarding isLoading={isLoading} />;
    } else if (onboardingState === OnboardingStates.exit) {
      return <div></div>;
    }
    return <div></div>;
  };

  return (
    <>
      <Container>{getOnboardingState()}</Container>
    </>
  );
};
