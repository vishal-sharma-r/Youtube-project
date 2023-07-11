import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispath = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      //  console.log("apilog");
      dispath(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full">
      <div className="ml-2 w-full h-[400px] border border-gray-100 shadow-lg bg-slate-50  rounded overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full p-2 ml-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispath(
            addMessage({
              name: "vishal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-gray-300 w-full outline-blue-100 rounded-full h-11 px-2"
          type="text "
          placeholder="Enter your chat.."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="border hover:bg-gray-300 px-2 ml-2 rounded-full">
          Sent
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
