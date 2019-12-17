import React from "react";

const FriendCard = props => {
  return (
    <li className="list-group-item">
      {props.name} {props.age} {props.email}
    </li>
  );
};

export default FriendCard;
