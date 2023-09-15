import React from "react";
import { Toolbar, List, IconButton } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import { MainListItems } from "../nav/listItems";

function MenuBarContent({ toggleDrawer }) {
  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List component="nav">
        <MainListItems />
      </List>
    </>
  );
}

export { MenuBarContent };
