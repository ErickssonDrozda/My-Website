import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

require('dotenv').config();


const client = new ApolloClient({
  uri: process.env.BACKEND_URL
});

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);