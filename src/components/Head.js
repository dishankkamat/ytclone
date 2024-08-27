import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6"
          alt="hamburger-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
        />
        <img
          className="h-6 mx-2"
          alt="yt-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQTXmpmU6QHLKCluDXWal6WsGgBTFTNIrgw&s"
        />
      </div>
      <div className="col-span-10 px-44">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1 px-10">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
