import React from "react";
const items = [1,2,4,5,7,8,9,10];
const Practice = () => {
  return (
    <div className="flex flex-wrap justify-center">{
    items.map(x => (
      
    <div className="p-2 m-2 w-64 shadow-lg flex flex-col ">
      <img src="data:image/png;base64,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" />
      <div className="text-left px-3">
        <h1 className="text-justify font-semibold">
          Kedarnath Behind The Scenes | Making of Kedarnath Movie | Sushant Singh
        </h1>
        <h1>Vishal Sharma</h1>
        <h1>3.4M views | 1 month ago</h1>
      </div>
    </div>

    ))
    }
    </div>
  );
};

export default Practice;
