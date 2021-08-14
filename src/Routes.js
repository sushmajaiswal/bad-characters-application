import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Character from "./pages/character";

const Routes = () => {
  console.log(window.location.href);
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/character" exact component={Character} />
           <Route path="/test" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
