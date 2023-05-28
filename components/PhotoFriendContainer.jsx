import Image from "next/image";
import React from "react";

const CustomImg = ({ src }) => (
  <Image
    width={90}
    height={110}
    src={src}
    alt="img"
    className="rounded-lg m-2 h-[100px] object-cover cursor-pointer "
  />
);

const friendName = [
  {
    name: "Mark Cuban",
    src: "/assets/mark.jpg",
  },
  {
    name: "Elon Musk",
    src: "/assets/elon_dai.jpg",
  },
  {
    name: "Sunny Vaya",
    src: "/assets/sunny.jpeg",
  },
  {
    name: "Ritik Roshan",
    src: "/assets/ritik.jpeg",
  },
  {
    name: "Afree",
    src: "/assets/african.jpeg",
  },
  {
    name: "Sajin Maharjan",
    src: "/assets/gaina_dai.jpeg",
  },
];

const PhotoFriendContainer = ({ heading, subheading, isFriend = false }) => {
  return (
    <div className="container bg-white mt-3 rounded-lg ">
      <div className="text_container flex p-4 justify-between">
        <h3 className="font-semibold">{heading}</h3>
        <p className=" text-primary">{subheading}</p>
      </div>
      <div className="photo_container flex flex-wrap p-3">
        {isFriend ? (
          <>
            {friendName.map((item, index) => {
              return (
                <>
                  <div className="flex flex-col items-center">
                    <CustomImg src={item.src} />
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <CustomImg src={"/assets/food.jpg"} />
            <CustomImg src={"/assets/gaming_mouse.jpg"} />
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoFriendContainer;
