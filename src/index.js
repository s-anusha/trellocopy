import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #4bbf6b;
    transition: all 0.5s ease-in;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
