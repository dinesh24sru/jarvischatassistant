import React, { useState } from 'react';
import { Toolbar, Typography, IconButton, Badge } from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { MulButton } from '../ui-components/atom';
import './appbarstyle.css';
import { AppBarButtonWrapper } from '../ui-components/wrapper/appbar-button';
import { CreateCutomerDialog } from '../ui-components/shared/create-customer';
import ThemeModeToggle from '../ui-components/shared/theme-toggle/theme-toggle';
import { setThemeMode } from '../redux/slices/layout';
import { useDispatch } from 'react-redux';
import { dispalyText } from '../appConstant';

function AppBarContent({ toggleDrawer, open }) {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const handleThemeToggle = (mode) => {
    dispatch(setThemeMode(mode));
  };
  return (
    <Toolbar
      id='appbar'
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}
    >
      <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component='h1'
        variant='h6'
        color='inherit'
        noWrap
        sx={{ flexGrow: 1 }}
      >
        {dispalyText.applicationTitle}
      </Typography>
      <AppBarButtonWrapper>
        <MulButton
          classes='create-button'
          child='+ Create'
          variant='contained'
          handleClick={() => {
            setOpenDialog(true);
          }}
        />
      </AppBarButtonWrapper>
      <ThemeModeToggle handleToggle={handleThemeToggle} />
      <IconButton color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {openDialog && (
        <CreateCutomerDialog
          handleClose={() => {
            setOpenDialog(false);
          }}
          open={openDialog}
        />
      )}
    </Toolbar>
  );
}

export { AppBarContent };
