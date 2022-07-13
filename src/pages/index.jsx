import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
function Shopping(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Home} />
      <Route path={`${match.url}/:productId`} component={Detail} />
    </Switch>
  );
}

export default Shopping;
