import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Empresa from './pages/Empresa';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Empresa} />
    </Switch>
  )
}