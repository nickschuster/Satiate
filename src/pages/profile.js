import { Button } from "@material-ui/core";
import React from "react";
import Auth from "@aws-amplify/auth";
import { navigate } from "gatsby";
import { useNotification } from "../components/Notification";

const Profile = () => {
  const { addNotification } = useNotification;

  const signOut = async () => {
    try {
      await Auth.signOut();
      navigate("/");
    } catch (e) {
      addNotification("Could not sign out. " + e.message);
    }
  };

  return (
    <>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
};

export default Profile;
