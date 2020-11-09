import React, { Component } from "react";
import { saveTokens, getTokens } from "../utils";
import { Route, RouteProps, Redirect } from "react-router-dom";

export interface IGaurdRoute extends Omit<RouteProps, "component"> {
    component: React.ElementType;
}
  
export const GaurdRoute: React.FC<IGaurdRoute>  = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      getTokens() ? <Component {...props} />
        : <Redirect to='/auth' />
    )} />
);