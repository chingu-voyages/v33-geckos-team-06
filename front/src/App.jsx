import AboutPage from "./components/AboutPage";
import React, { Component } from "react";
import Mainpage from "./components/Mainpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarSignup from "./components/NavbarSignup";
import Navigation from "./components/Navigation";
import HeaderSignup from "./components/HeaderSignup";
import Header from "./components/Header";
import Main from "./components/Main";
import MainSignup from "./components/MainSignup";
import Bottom from "./components/Bottom";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";
import "./App.css";
import { InitializeFirebase } from "./utils/FirebaseConnector";
import Browse from "./pages/BrowsePage";

import MainUploadGame from "./components/MainUploadGame"

import GameDescriptionModal from "./components/GameDescriptionModal";

import { GlobalProvider } from "./contexts/GlobalContext";


export default class App extends Component {
  render() {
    InitializeFirebase();
    return (

      <div>
          <GlobalProvider>
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/termsofservice">
                  <TermsPage />
                </Route>

                <Route path="/mainpage">
                  <div>
                    <Mainpage />
                  </div>
                </Route>

                <Route path="/about">
                  <div>
                    <AboutPage />
                  </div>
                </Route>

                <Route path="/privacy">
                  <PrivacyPage />
                </Route>



              <Route path="/browse-page">
                <Browse></Browse>
                <Bottom></Bottom>

              </Route>
              <Route path="/sign-in">
                <div>
                  <Navigation />
                  <Header />
                  <Main />
                  <Bottom />
                </div>
              </Route>


                <Route path="/sign-up">
                  <div>
                    <Navigation />
                    <NavbarSignup />
                    <MainSignup />
                    <Bottom />
                  </div>
                </Route>

                <Route path="/browse-page">
                  <Browse></Browse>
                  <Bottom></Bottom>
                </Route>


              <Route path="/Upload-games">
                <div>
                  <Navigation />
                  <MainUploadGame />
                  <Bottom />
                </div>
              </Route>

              <Route path="/">
                <div>
                  <Navigation />
                  <Header />
                  <Main />
                  <Bottom />
                </div>



              </Route>



            </Switch>
          </div>
    

   
        <GameDescriptionModal />
        </Router>
      </GlobalProvider>
        </div>

    );
  }
}
