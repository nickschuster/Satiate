import * as React from "react";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports.js";
import App from "../components/App";

import "../css/global.scss";

const Index = () => {
  Amplify.configure(awsconfig);

  return (
    <>
      <div className="placeholder">
        <App />
      </div>
    </>
  );
};

export default Index;
