import React, { useState } from 'react';
import {
  styled,
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar as MuiAppBar,
  Drawer as MuiDrawer,
  Box,
  Grid,
} from '@mui/material';

import { AppBarContent } from './appbarcontent';
import { MenuBarContent } from './menubarcontent';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.background.default,
  color: theme.palette.color.main,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(5),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

function ContentLayout() {
  const { mode } = useSelector((state) => state.layout);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === 'light' ? '#F4F4F4' : '#1A1D1F',
      },
      secondary: {
        main: mode === 'light' ? '#f50057' : '#e57373',
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#121212',
      },
      color: {
        main: mode === 'light' ? '#272B30' : '#ffffff',
      },
      dark: {
        primary: '#64b5f6',
        secondary: '#e57373',
        background: '#121212',
      },
      fontColor: {
        main: mode === 'light' ? '#6F767E' : '#6F767E',
      },
    },
    darkMode: true,
  });

  const APP_BAR_MOBILE = 8;
  const APP_BAR_DESKTOP = 8;
  const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    height: '100vh',
    paddingTop: APP_BAR_MOBILE * 10,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP * 10,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  const [openMenu, setOpenMenu] = useState(true);

  const toggleDrawer = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant='permanent' open={openMenu}>
          <MenuBarContent toggleDrawer={toggleDrawer} open={openMenu} />
        </Drawer>
        <Grid container>
          <Grid item xs={12}>
            <AppBar elevation={0} position='absolute' open={openMenu}>
              <AppBarContent open={openMenu} toggleDrawer={toggleDrawer} />
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <Main style={{ background: theme.palette.primary.main }}>
              <Outlet />
            </Main>
          </Grid>{' '}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export { ContentLayout };
