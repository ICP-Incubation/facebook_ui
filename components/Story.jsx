import { useSession } from "next-auth/react";
import React from "react";

import { HiBookOpen } from "react-icons/hi";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from "./SingleStory";
import Image from "next/image";
import { RiVideoAddFill } from "react-icons/ri";

const Story = () => {
  const singleStoryData = [
    {
      title: "Mark Dai",
      img: "/assets/mark.jpg",
      postImg: "bg-[url(/assets/building.jpg)]",
    },
    {
      title: "Elon Dai",
      img: "/assets/elon_dai.jpg",
      postImg: "bg-[url(/assets/gaming_mouse.jpg)]",
    },
    {
      title: "Mark Dai",
      img: "/assets/mark.jpg",
      postImg: "bg-[url(/assets/building.jpg)]",
    },
    {
      title: "Elon Dai",
      img: "/assets/elon_dai.jpg",
      postImg: "bg-[url(/assets/gaming_mouse.jpg)]",
    },
    {
      title: "Bill Dai",
      img: "/assets/mark.jpg",
      postImg: "bg-[url(/assets/building.jpg)]",
    },
    {
      title: "Elon Dai",
      img: "/assets/elon_dai.jpg",
      postImg: "bg-[url(/assets/gaming_mouse.jpg)]",
    },
  ];

  const { data: session } = useSession();

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="grid grid-cols-3 bg-white border-b border-gray-300">
        <div className="relative">
          <div className="mx-auto w-fit flex gap-2 items-center text-primary py-2 cursor-pointer ">
            <HiBookOpen className="text-[30px]" />
            <p className="font-bold">Stories</p>
          </div>
          <div className="bg-primary h-[3px]"></div>
        </div>
        <div className=" hover:bg-gray-100 hover:rounded-lg">
          <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2 cursor-pointer ">
            <TfiVideoClapper className="text-[26px]" />
            <p className="font-bold">Reels</p>
          </div>
        </div>
        <div className="hover:bg-gray-100 hover:rounded-lg">
          <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2 cursor-pointer">
            <RiVideoAddFill className="text-[26px]" />
            <p className="font-bold">Rooms</p>
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll scrollbar-hide cursor-pointer">
        <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
          <Image
            width={112}
            height={151}
            className="w-[112px] h-[151px] rounded-t-[15px] object-cover"
            src={session?.user?.image}
            alt="dp"
          />
          <div>
            <div className="bg-primary w-[35px] h-[35px] rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white">
              <AiOutlinePlus />
            </div>
            <p className="text-center mt-2 font-medium">Create Story</p>
          </div>
        </div>
        {singleStoryData.map(({ title, img, postImg }, index) => {
          return (
            <SingleStory
              key={index}
              title={title}
              img={img}
              postImg={postImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Story;
