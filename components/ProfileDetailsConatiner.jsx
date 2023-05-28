import React from "react";
import { IoWifiSharp } from "react-icons/io5";
import { RxHome } from "react-icons/rx";
const Button = ({ text }) => (
  <button className="bg-gray-200 w-[100%] p-1 rounded-lg hover:bg-gray-300 font-semibold  cursor-pointer mt-3 mb-3">
    {text}
  </button>
);

const Hobbies = ({ text }) => (
  <p className=" p-2 border border-black-800 inline-block rounded-3xl m-1 cursor-pointer hover:bg-gray-300">
    {text}
  </p>
);

const ProfileDetailContainer = () => {
  return (
    <div className="w-full bg-white p-3 rounded-lg">
      <div className="content  flex flex-col  justify-around">
        <h2 className=" font-semibold text-lg">Intro</h2>
        <div className="desc text-center">
          The road to success is currently under construction
        </div>
        <Button text={"Edit Bio"} />
        <div>
          <RxHome className="inline-block" /> Lives in{" "}
          <span className="font-semibold">UK</span> <br />
          <IoWifiSharp className="inline-block" /> Followed by
          <span className="font-semibold"> 1K people</span>
        </div>
        <Button text={"Edit Details"} />
        <div className="activity">
          <Hobbies text={"Treeking"} />
          <Hobbies text={"Travelling"} />
          <Hobbies text={"Football"} />
          <Hobbies text={"Music"} />
          <Hobbies text={"Learning"} />
        </div>
        <Button text={"Edit Hobbies"} />
        <Button text={"Add Featured"} />
      </div>
    </div>
  );
};

export default ProfileDetailContainer;
