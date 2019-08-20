import React from "react";
import "./App.css";

import FormikLogin from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">FriendsList</Link>
            </li>
          </ul>
        </>

        <Route path="/login" component={FormikLogin} />
        <PrivateRoute exact path="/protected" />
      </div>
    </Router>
  );
}

export default App;
