import Image from "next/image";
import React from "react";

const FriendRequests = () => {
  return (
    <div>
      <div className="flex gap-2 w-[100%]">
        <Image
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full "
          src="/assets/mark.jpg"
          alt="dp"
        />
        <div>
          <h1 className="font-semibold">Mark Dai</h1>
          <p className="text-gray-500 text-[14px]">11 mutual friends</p>
        </div>
        <p className="ml-auto text-primary text-[14px]">1 d</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button className="bg-primary text-white py-2 px-5 rounded-lg">
          Confirm
        </button>
        <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendRequests;
