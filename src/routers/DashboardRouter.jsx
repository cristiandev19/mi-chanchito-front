import {
  AppBar, Container, IconButton, List, ListItem, ListItemIcon,
  ListItemText, makeStyles, Menu, MenuItem, SwipeableDrawer,
  Toolbar, Typography,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch, useRouteMatch } from 'react-router';
import DashboardHomePage from '../pages/DashboardHomePage';
import ProfilePage from '../pages/ProfilePage';
import DashboardGeneralBalancePage from '../pages/DashboardGeneralBalancePage';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  addBtn: {
    width  : '100%',
    margin : '20px 0',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: 250,
  },
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#f5f5f5',
  },
}));

const DashboardRouter = () => {
  const classes = useStyles();

  const { path, url } = useRouteMatch();
  const [drawer, setDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleDrawer = (opened) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(opened);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Mi chanchito
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical   : 'top',
                horizontal : 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical   : 'top',
                horizontal : 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
              <MenuItem onClick={handleClose}>Cerrar sesion</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className={classes.fullList}>
          {/* {list('left')} */}
          <List>
            <ListItem button component={Link} to={`${url}/perfil`}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/home`}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/general-balance`}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Balance general" />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>

      <div className={classes.container}>
        <Container fixed maxWidth="md">
          <Switch>
            <Route exact path={`${path}/home`}>
              <DashboardHomePage />
            </Route>
            <Route path={`${path}/perfil`}>
              <ProfilePage />
            </Route>
            <Route path={`${path}/general-balance`}>
              <DashboardGeneralBalancePage />
            </Route>

          </Switch>
        </Container>

      </div>
    </>
  );
};

DashboardRouter.propTypes = {

};

export default DashboardRouter;
