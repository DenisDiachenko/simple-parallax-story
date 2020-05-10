import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from '../screens/Menu';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Menu />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
