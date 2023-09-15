import React from "react";
import { useLocation } from "react-router";

function AppBarButtonWrapper({ children }) {
  const location = useLocation();
  const appBarConfig = { "/app/customer": "customer" };
  return (
    <>{Object.keys(appBarConfig).includes(location.pathname) && children}</>
  );
}

export { AppBarButtonWrapper };
