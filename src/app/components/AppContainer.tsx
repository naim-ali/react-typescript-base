import React from "react";
import "../assets/css/site.scss";
import App from "./App"
import { createBrowserHistory } from 'history'
import { Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const restLink = new RestLink({ 
  uri: "http://grando.io/inbox/index.php/api/", 
  credentials: "omit",

 });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('aurign://auth/jwt');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'authority': 'grando.io',
      'method': 'GET',
      'path': '/inbox/index.php/api/Private_api/curators/user_id/2211/start/0/limit/8',
      'scheme':'https',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
      //authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(restLink),

  cache: new InMemoryCache(),
  
});



const AppContainer = () => {
    return (
    <ApolloProvider client={client}>
        <Router history={createBrowserHistory()}>
            <App/>
        </Router>
    </ApolloProvider>
    )
}

export default AppContainer;