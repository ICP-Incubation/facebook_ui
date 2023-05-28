import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import Tabs from "./Tabs";
import ProfileDetailContainer from "./ProfileDetailsConatiner";
import WhatsOnYourMind from "./WhatsOnYourMind";
import PhotoFriendContainer from "./PhotoFriendContainer";
import Post from "./Post";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";

const MyProfile = ({ image, name, id }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() =>
  //   onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       const postData = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         const postDate = data.timestamp.toDate();
  //         const currentDate = new Date();
  //         const diffTime = Math.abs(currentDate - postDate);
  //         const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  //         let timestamp;

  //         if (diffDays >= 1) {
  //           timestamp = `${diffDays}D`;
  //         } else {
  //           const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  //           if (diffHours >= 1) {
  //             timestamp = `${diffHours}h`;
  //           } else {
  //             const diffMinutes = Math.floor(diffTime / (1000 * 60));
  //             timestamp = `${diffMinutes}m`;
  //           }
  //         }

  //         return {
  //           id: doc.id,
  //           data: data,
  //           timestamp: timestamp,
  //         };
  //       });
  //       setPosts(postData);
  //     }
  //   )
  // );

  return (
    <>
      <div className="bg-white  shadow-lg shadow-white-500/50 ">
        <div className="container m-auto">
          <img
            src="/assets/mark.jpg"
            alt="cover-img"
            className=" w-3/4 m-auto h-[350px] object-cover items-center rounded-b-lg"
          />
        </div>
        <div className="profile relative ml-[12rem]  max-w-5xl m-auto">
          <div className="profile-img flex items-center justify-between ">
            <div className="divider">
              <div>
                <Image
                  src={"/assets/mark.jpg"}
                  width={130}
                  height={130}
                  className="rounded-full absolute top-[-13px]"
                  alt="profile"
                />
              </div>
              <div className="details ml-[9rem] mt-1">
                <span className=" font-bold text-[1.3rem] ">Mark Cuban</span>
                <p className="text-gray-500 text-sm">1.6K friend</p>

                <div className="mt-3 flex -space-x-2 overflow-hidden ">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="button_container">
              <div className="buttons text-white flex mt-10 mr-16">
                <button className="p-2 text-[.90rem] mr-4 bg-blue-500 text-white rounded-lg flex items-center hover:bg-blue-700">
                  <IoAdd className="text-white" />
                  &nbsp;Add to Story
                </button>
                <button className="p-2 text-[.90rem] bg-gray-300 text-black rounded-lg flex items-center hover:bg-gray-400">
                  <BsPencilFill />
                  &nbsp;Edit profile
                </button>
              </div>
            </div>
          </div>
          <hr className="h-[3px] text-gray-700 w-11/12 m-auto mt-4" />
        </div>
        <div className="tabs">
          <Tabs />
        </div>
      </div>
      <div className="container max-w-[75%] m-auto mt-4 flex justify-around">
        <div className="profile_container w-[35%]">
          <ProfileDetailContainer />
          <PhotoFriendContainer
            heading={"Photos"}
            subheading={"See All Photos"}
          />
          <PhotoFriendContainer
            heading={"Friends"}
            subheading={"See All Friends"}
            isFriend={true}
          />
          <p className="text-[14px] text-gray-500 mt-2">
            Privacy · Terms · Advertising · Ad choices · <br /> Cookies · More ·
            Meta © 2023
          </p>
        </div>
        <div className="w-[50%] ">
          <WhatsOnYourMind />
          <Post />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
