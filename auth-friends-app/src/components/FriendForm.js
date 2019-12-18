import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AxiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/friends", newFriend)
      .then(res => console.log(res.data))
      .catch(err => console.log("post error", err));
    setTimeout(() => {
      props.history.push("/friends");
    }, 2000);
  };

  const handleChanges = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="name"
          value={newFriend.name}
          onChange={handleChanges}
          required
        />
        <label for="age">Age</label>
        <input
          type="text"
          className="form-control"
          name="age"
          placeholder="age"
          value={newFriend.age}
          onChange={handleChanges}
          required
        />
        <label for="email">e-Mail</label>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="name@example.com"
          value={newFriend.email}
          onChange={handleChanges}
          required
        />
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FriendForm;
