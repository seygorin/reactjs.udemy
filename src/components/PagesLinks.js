import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

import { NavLink } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


const links = [
    {
        id: 1,
        path: "/",
        text: "Main",
    },
    {
        id: 2,
        path: "/login",
    },
    {
        id: 3,
        path: "/news",
        text: "News",
    },
    {
        id: 4,
        path: "/profile",
        text: "Profile",
    }
]


export default function PagesLinks() {
    const classes = useStyles();
    return (
    <>
        <Toolbar className={classes.toolbar}>
            <Button size="small" key={links.id=3}>
                <NavLink className="links" to={links.path='/news'} exact>{links.text='News'}</NavLink>
            </Button>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
            key={links.id=1}
            >
                <NavLink className="links" to={links.path='/'} exact>{links.text='Sitename'}</NavLink>
            </Typography>
            <IconButton size="small" key={links.id=4}>
                <NavLink className="links" to={links.path='/profile'} exact><AccountCircle /></NavLink>
            </IconButton>
            <Button variant="outlined" size="small" key={links.id=2}>
                <NavLink className="links" to={links.path='/login'} exact>Sign up</NavLink>
            </Button>
        </Toolbar>
    </>
    )
}