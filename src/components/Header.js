import React from 'react';

import Main from '../pages/main'
import News from '../pages/news'
import Login from '../pages/login'
import Profile from '../pages/profile'

import { Route, Switch } from "react-router-dom"

import PagesLinks from './PagesLinks'


export default function Header(props) {
  
  return (
    <>
        <PagesLinks />
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/news">
                <News />
            </Route> 
            <Route path="/login">
                <Login />
            </Route> 
            <Route path="/profile">
                <Profile />
            </Route> 
            <Route path="*">
                Yo wrong
            </Route>       
          </Switch>
    </>
  );
};