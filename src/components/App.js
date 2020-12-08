
import React, { Component, useState } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import "../styles/App.css";
export function LocationDisplay() {
  let location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}
function Home() {
  return (
    <>
      <div>You are home</div>
    </>
  );
}
function About() {
  return (
    <>
      <div>You are on the about page</div>
    </>
  );
}

function NoMatch() {
  return <div>No Match</div>;
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={NoMatch} />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;