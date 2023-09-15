import React, { useState } from "react";
import { Grid, Typography, Container, Divider } from "@mui/material";
import { MulButton, TextBoxWithIcon } from "../../ui-components/atom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import { createTest } from "../../redux/slices/test";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./loginStyle.css";
import SvgColor from "../../ui-components/shared/svg-color";
import { StyledNavItemIcon } from "../../ui-components/shared/styled-nav-item-icon/styled-nav-item-icon";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch(createTest({ email, password }));
    navigate("/app/dashboard");
  };

  return (
    <Grid container className="login-grid">
      <Container className="login-container">
        <Grid
          className="login-container-grid"
          container
          direction="column"
          justifyContent="start"
          alignItems="start"
        >
          <StyledNavItemIcon>
            <SvgColor src={`/assets/logo/phasedloop.svg`} />
          </StyledNavItemIcon>
          <Typography variant="h3">Sign in</Typography>
          <Typography variant="p">Sign in with Open accounts</Typography>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={6}>
              <MulButton
                child={ButtonChild({ name: "Google", iconName: "google" })}
                classes="image-button"
              />
            </Grid>
            <Grid item xs={6}>
              <MulButton
                child={ButtonChild({ name: "Apple", iconName: "apple" })}
                classes="image-button"
              />
            </Grid>
          </Grid>
          <Divider />
          <Typography variant="p"> Or continue with email address</Typography>
          <TextBoxWithIcon
            Icon={MailOutlineIcon}
            value={email}
            handleChange={(e) => {
              setEamil(e.target.value);
            }}
          />
          <TextBoxWithIcon
            Icon={LockTwoToneIcon}
            value={password}
            type="password"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <MulButton
            classes="sign-in"
            child="Sign in"
            variant="contained"
            handleClick={handleSubmit}
          />
          <Typography variant="p" className="text">
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </Typography>

          <Typography variant="p" className="text">
            Don’t have an account? Sign up
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
}

const ButtonChild = ({ name, iconName }) => {
  return (
    <>
      <StyledNavItemIcon>
        <SvgColor
          src={`/assets/logo/${iconName}.svg`}
          sx={{ width: 1, height: 1 }}
        />
      </StyledNavItemIcon>
      {name}
    </>
  );
};

export { Login };
