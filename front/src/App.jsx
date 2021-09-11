import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Main from "./components/Main"
import Bottom from "./components/Bottom"
import PrivacyPage from "./components/PrivacyPage";
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div>


<Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/privacy">
              <PrivacyPage />
          </Route>

          <Route path="/sign-in">
            <div>
              <Navigation/>
              <Header/>
              <Main/>
              <Bottom/>
            </div>
            
          </Route>

          <Route path="/">
            <div>
              <Navigation/>
              <Header/>
              <Main/>
              <Bottom/>
            </div>
            
          </Route>
          
        </Switch>
      </div>
    </Router>

      </div>
    )
  }
}
