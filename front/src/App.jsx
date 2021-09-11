import React, { Component } from 'react'

import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Main from "./components/Main"
import Bottom from "./components/Bottom"
import './App.css'
import { InitializeFirebase } from './utils/FirebaseConnector'


export default class App extends Component {
  render() {
    InitializeFirebase();
    return (
      <div>
        
        <Navigation/>
        <Header/>
        <Main/>
        <Bottom/>
      </div>
    )
  }
}
