import React from "react";
import _ from "lodash";
import store from "../store";
import Header from "../components/Header";
import MessageInput from "../containers/MessageInput";
import Chat from "./Chats";
import "../styles/ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="chat-window">
      <Header user={activeUser} />
      <Chat messages={_.values(activeMessages)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
