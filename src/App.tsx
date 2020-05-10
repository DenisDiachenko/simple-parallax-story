import React, { useEffect } from 'react';

import { Store } from './store';

import { inject } from 'mobx-react'

import Router from './routes';

interface IProps {
  store?: Store;
}

const App = ({ store }: IProps) => {

  useEffect(() => {
    store?.fetchData();
  });

  return (
    <Router />
  )
}

export default inject('store')(App);
