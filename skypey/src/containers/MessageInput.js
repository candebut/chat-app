import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "../styles/MessageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();

  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="message" onSubmit={handleSubmit}>
      <input
        className="message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
