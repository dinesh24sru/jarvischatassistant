import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

export default function ThemeModeToggle({ handleToggle }) {
  const [mode, setMode] = useState("light");
  const handleChange = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    handleToggle(newMode);
  };

  return (
    <IconButton onClick={() => handleChange()}>
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
