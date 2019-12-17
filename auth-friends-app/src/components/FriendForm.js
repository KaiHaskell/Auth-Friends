import React, { useState } from "react";

import { AxiosWithAuth } from "../utils/axiosWithAuth";
import Axios from "axios";

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
      setFriend({...newFriend, [e.target.name]: e.target.value});
  };

  handleSubmit = e => {
      e.preventDefault();
      AxiosWithAuth().post("/friends")
      .then(res => {
          setNewFriend({[...]})
      })
  };

  return (
    <form>
      <div className="form-group">
        <label for="name">Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="name"
          required
        />
        <label for="age">Age</label>
        <input
          type="age"
          className="form-control"
          id="age"
          placeholder="age"
          required
        />
        <label for="email">e-Mail</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          required
        />
      </div>
    </form>
  );
};
