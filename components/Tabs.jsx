import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Tabs = () => {
  return (
    <div>
      <div className="tabs flex  items-center justify-around">
        <div className="tabs flex p-2 relative">
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg text-primary ">
            Posts
            <div className="absolute bg-primary -left-[-5px] h-[3px] w-[70px] -bottom-[1px]"></div>
          </p>
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg">
            About
          </p>
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg">
            Friends
          </p>
          <p className=" mr-4 cursor-pointer  p-2 hover:bg-gray-300 rounded-lg">
            Photos
          </p>
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg">
            Videos
          </p>
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg">
            Videos
          </p>
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg">
            Check-ins
          </p>
          <p className=" mr-4 cursor-pointer p-2 hover:bg-gray-300 rounded-lg">
            More <AiFillCaretDown className="inline-block" />
          </p>
        </div>
        <div className="icons bg-gray-300 p-2 rounded-lg cursor-pointer hover:bg-gray-400">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
