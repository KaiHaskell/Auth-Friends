import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";

import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />

      <PrivateRoute path="/friends" component={Friends} />

      <PrivateRoute path="/addfriend" component={FriendForm} />
    </div>
  );
}

export default App;
