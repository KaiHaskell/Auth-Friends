import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";

const Friends = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <ul className="list-group">
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        ))}
      </ul>
      <Link to="/addfriend">
        <button type="button" class="btn btn-outline-primary">
          Add Friend
        </button>
      </Link>
    </div>
  );
};

export default Friends;
