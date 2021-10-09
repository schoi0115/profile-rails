import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="bgcolor">
      <NavBar />
      <main >
        <Switch >
          <Route exact path="/" >
            <Home 
            />
          </Route>

          <Route exact path="/page1">
            <Page1  
            />
          </Route>

          <Route exact path="/page2">
            <Page2

            />
          </Route>

          <Route exact path="/page3">
            <Page3
            
            />
          </Route>
          <Route exact path="/page4">
            <Page3
            
            />
          </Route>
          <Route exact path="/page5">
            <Page3
            
            />
          </Route>
          <Route exact path="/page6">
            <Page3
            
            />
          </Route>

   
        </Switch>
      </main>
    </div>
  );
}

export default App;
