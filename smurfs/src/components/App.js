import React from "react";
import { connect } from "react-redux";
import "./App.css";
import SmurfList from "./SmurfList";

function App(props) {
  return (
    <div className="App">
      <SmurfList />
    </div>
  );
}

export default connect(
  state => state,
  {}
)(App);
