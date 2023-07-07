import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggesion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  // console.log(searchQuery);
  useEffect(() => {
    // Api call

    // Make an api call after each key press
    // but if diff b/w 2 api calls is <200ms decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggesion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggesion(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg bg-white sticky top-0 left-0 w-full h-[70px] z-50 ">
      <div className="flex col-span-1 ">
        <AiOutlineMenu
          className="   mt-4 mx-4 hover:bg-gray-200 rounded-2xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="youtube logo"
            className="h-12"
          />
        </a>
      </div>

      <div className="col-span-10  pt-1 h-12 pl-32 ">
        <div className="">
          <input
            type="text"
            className="px-5 w-2/3  border border-gray-500 p-2  rounded-l-full outline-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 pt-[0.65rem] pb-[0.85rem] rounded-r-full px-5  bg-gray-100">
            <BiSearch />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white  py-2 px-5 w-[36rem] shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 shadow-md flex">
                  {" "}
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          alt="userIcon"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          className="h-[2.9rem] pl-2 pt-1"
        />
      </div>
    </div>
  );
};

export default Head;
