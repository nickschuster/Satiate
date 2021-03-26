// Gatsby browser API functions.

import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports.js";

exports.onClientEntry = () => {
  // AWS config init.
  Amplify.configure(awsconfig);
};
