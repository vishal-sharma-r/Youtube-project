import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col px-2  w-full content-center">
      <div className="flex w-full">
        <div>
        <iframe
          width="800"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen 
        ></iframe>
        </div>
        <div className="w-full pl-2">
          <LiveChat/>
          <div className="text-center font-semibold text-2xl">
            Live Chat
          </div>
        </div>
      </div>
      <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
