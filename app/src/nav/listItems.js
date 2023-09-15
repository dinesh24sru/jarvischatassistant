import React from "react";
import { useNavigate } from "react-router";
import { ListItemButton, ListItemText, useTheme } from "@mui/material";

import { navConfig } from "./nav-config";
import { StyledNavItemIcon } from "../ui-components/shared/styled-nav-item-icon/styled-nav-item-icon";

export function MainListItems() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <React.Fragment>
      {navConfig.map((nav) => {
        return (
          <ListItemButton
            style={{ color: theme.palette.fontColor.main, padding: "5px 0px" }}
            onClick={() => {
              navigate(nav.path);
            }}
          >
            <StyledNavItemIcon>{nav.icon}</StyledNavItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "15px" }}
              primary={nav.title}
            />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
}
