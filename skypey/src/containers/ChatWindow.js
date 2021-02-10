import React from "react";
import _ from "lodash";
import store from "../store";
import Header from "../components/Header";
import Chat from "./Chats";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];

  return (
    <div className="chat-window">
      <Header user={activeUser} />
      <Chat messages={_.values(activeMessages)} />
    </div>
  );
};

export default ChatWindow;
