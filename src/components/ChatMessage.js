import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
      <div className="flex items-center shadow-sm p-2">
        <img
          alt="userIcon"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          className="h-8 p-2 pt-1"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    
  );
};

export default ChatMessage;
