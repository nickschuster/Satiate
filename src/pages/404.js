import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

// 404 Component. Automatically redirects users to root page.
const NotFound = () => {
  const [linkRef, updateLinkRef] = useState({
    click: () => {},
  });

  useEffect(() => {
    linkRef.click();
  }, [linkRef]);

  return (
    <Link to="/" ref={(ref) => updateLinkRef(() => ref)}>
      Redirecting...
    </Link>
  );
};

export default NotFound;
