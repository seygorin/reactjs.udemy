import React from 'react';

import Main from '../pages/main'
import One from '../pages/one'
import Two from '../pages/two'
import Three from '../pages/three'
import Login from '../pages/login'
import Profile from '../pages/profile'

import { Route, Switch } from "react-router-dom"

import PagesLinks from './PagesLinks'


export default function Header() {
  
  return (
    <>
        <PagesLinks />
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/one">
                <One />
            </Route> 
            <Route path="/two">
                <Two />
            </Route> 
            <Route path="/three">
                <Three />
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