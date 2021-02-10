import React from "react";

const ChatWindow = ({ activeUserId }) => {
  return (
    <div className="chat-window">Conversation for user id {activeUserId}</div>
  );
};

export default ChatWindow;
