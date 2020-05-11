import React, { useEffect } from "react";

import { Store } from "./store";

import { inject } from "mobx-react";

import { BrowserRouter } from "react-router-dom";

import Router from "./routes";

interface IProps {
  store?: Store;
}

const App = ({ store }: IProps) => {
  useEffect(() => {
    store?.fetchData();
  });

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default inject("store")(App);
