import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";
import { Auth0Provider } from "@auth0/auth0-react";
import loadAppConfig from "./config";

ReactDOM.render(<AppContainer />, document.getElementById("root"));
