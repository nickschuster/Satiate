import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { FinishOnboarding } from "./FinishOnboarding";
import { OnboardingStates } from "./OnboardingStates";
import { SetGoals } from "./SetGoals";
import { ProfileSetup } from "./ProfileSetup";
import { AddFriends } from "./AddFriends";
import { SeeLeaderboard } from "./SeeLeaderboard";

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
    setOnboardingState(OnboardingStates.setProfile);
  };

  // Save the profile details to parent state.
  const saveProfile = () => {
    console.log("Save profile.");
    setOnboardingState(OnboardingStates.addFriends);
  };

  // Save and follow the selected friends.
  const saveFriends = () => {
    console.log("Save friends.");
    setOnboardingState(OnboardingStates.showOnLeaderboard);
  };

  // Start wrapping up onboarding.
  const saveLeaderboard = () => {
    console.log("Save leaderboard");
    setOnboardingState(OnboardingStates.finish);
    completeTasks();
  };

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

  // Go back to the previous onboarding step.
  const goBack = () => {
    setOnboardingState((prev) => {
      return Math.max(prev - 1, 0);
    });
  };

  // Display the onboarding form based on current onboarding state.
  const getOnboardingState = () => {
    if (onboardingState === OnboardingStates.setGoals) {
      return <SetGoals saveGoals={saveGoals} />;
    } else if (onboardingState === OnboardingStates.setProfile) {
      return <ProfileSetup saveProfile={saveProfile} goBack={goBack} />;
    } else if (onboardingState === OnboardingStates.addFriends) {
      return <AddFriends saveFriends={saveFriends} goBack={goBack} />;
    } else if (onboardingState === OnboardingStates.showOnLeaderboard) {
      return (
        <SeeLeaderboard goBack={goBack} saveLeaderboard={saveLeaderboard} />
      );
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
