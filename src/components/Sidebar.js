import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Home} from "lucide-react";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <Link to="/">
        <span><Home /></span>
        <h1 className="font-bold">Home</h1>
      </Link>
      <Link to ={"/practice"}>
      <h1 className="font-bold ">Practice</h1>
      </Link>
      <h1 className="font-bold ">Shorts</h1>
      <h1 className="font-bold ">Videos</h1>
      <h1 className="font-bold ">Live</h1>
      <Link to={"/demo"}>
      <h1 className="font-bold">Demo</h1>
      </Link>
      <h1 className="font-bold pt-5">Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
