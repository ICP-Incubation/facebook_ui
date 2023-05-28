import React from "react";
import LeftSidebarLink from "./LeftSideBarLink";
import { BsChevronDown } from "react-icons/bs";
import { useSession } from "next-auth/react";
import Link from "next/link";

const LeftSideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <Link href="/profile">
          <LeftSidebarLink
            image={session?.user?.image}
            text={session?.user?.name}
          />
        </Link>
        <LeftSidebarLink image="/assets/friends.png" text="Friends" />
        <LeftSidebarLink image="/assets/group.png" text="Groups" />
        <LeftSidebarLink image="/assets/market.png" text="Marketplace" />
        <LeftSidebarLink image="/assets/save.png" text="Saved" />
        <LeftSidebarLink image="/assets/pages.png" text="Pages" />
        <LeftSidebarLink image="/assets/events.png" text="Events" />
        <LeftSidebarLink image="/assets/most_recent.png" text="Most Recent" />

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300 hover:rounded-lg">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · More ·
          Meta © 2023
        </p>
      </div>
    </div>
  );
};

export default LeftSideBar;
