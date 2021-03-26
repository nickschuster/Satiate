import React, { useState, useEffect } from "react";

import "../css/Toast.scss";

const Toast = ({ display, content, type, delay }) => {
  const [hideDelay, setHideDelay] = useState(delay ? delay : 5000);

  return (
    <React.Fragment>
      <div
        className={"toast-container toast-" + (display ? "visible" : "hidden")}
      ></div>
    </React.Fragment>
  );
};

export default Toast;
