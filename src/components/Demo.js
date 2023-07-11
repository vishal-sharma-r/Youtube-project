import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("REnDERiNG....");
  return (
    <div
      className={
        "w-96 h-96  p-2 m-3 border border-black " +
        (isDarkTheme && "bg-gray-700 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-red-400"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-80"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">{text}</h1>
      </div>
    </div>
  );
};

export default Demo;
