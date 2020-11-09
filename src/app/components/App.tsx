import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { GaurdRoute } from "./Auth/Gaurd/Gaurd"
import Auth from "./Auth/Auth"
import Dash from "./Dash/Dash"


import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'

export const GET_ALL_TODOS = gql`
  query Curators {
      curators @rest(type: "Curators" , path:"Private_api/curators/user_id/2211/start/0/limit/8") {
        name
      }
  }
`




const App = () => {
  const { loading, data, error } = useQuery(
    GET_ALL_TODOS
  );

  if (loading) return <span>yurp</span>
  if (error) return <div>An error occurred</div>
  if (!data) return <div>No data!</div>;

  console.log("cura", data);
  



  return (
    <div id="app" className="d-flex flex-column h-100">
      <Switch>
        {/* <Route path="/" exact component={Splash} /> */}
        <GaurdRoute path="/client" exact component={Dash} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </div>
  );
};

export default App;
