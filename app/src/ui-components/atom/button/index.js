import React from "react";
import { Button } from "@mui/material";

const MulButton = ({
  variant = "outlined",
  child,
  classes,
  handleClick,
  style,
}) => {
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={classes}
      style={{ textTransform: "none", ...style }}
    >
      {child}
    </Button>
  );
};

export default MulButton;
