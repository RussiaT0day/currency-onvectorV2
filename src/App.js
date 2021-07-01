import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initialState from './redux/initState';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';

import Сonvector from './components/Сonvector/Сonvector'
import Сurrency from './components/Сurrency/Сurrency'
import Header from './components/Header/Header'
function App() {

  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/convector">
            <Сonvector />
          </Route>
          <Route path="/">
            <Сurrency />
          </Route>

        </Switch>
      </Router >
  );
}

export default App;
