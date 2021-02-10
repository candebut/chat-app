import React from "react";
import { setActiveUserId } from "../actions";
import store from "../store";
import "../styles/User.css";

const User = ({ user }) => {
  const { name, profile_pic, status } = user;
  return (
    <div className="user" onClick={() => handleUserClick(user)}>
      <img src={profile_pic} alt={name} className="user__pic" />
      <div className="user__details">
        <p className="user__details-name">{name}</p>
        <p className="user__details-status">{status}</p>
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
}

export default User;
