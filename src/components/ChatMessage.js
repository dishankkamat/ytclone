import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
