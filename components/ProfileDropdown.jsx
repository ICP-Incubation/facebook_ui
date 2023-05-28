import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { MdArrowForwardIos } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileDropDown() {
  const { data: session } = useSession();
  return (
    <Menu as="div" className="relative inline-block text-left w-auto">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900  ">
          <Image
            width={35}
            height={44}
            className="cursor-pointer rounded-full"
            src={session?.user?.image}
            alt="dp"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  right-0 z-10 mt-2  w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="container p-3">
            <div className="container bg-white-500 shadow-lg shadow-white-500/50 rounded-lg ">
              <div className="profile_name_container flex items-center justify-between  p-4 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
                <div>
                  <Image
                    src={session?.user.image}
                    width={40}
                    height={40}
                    className="rounded-full inline-block "
                    alt="dp"
                  />
                  <span className="w-3/5">{session?.user.name}</span>
                </div>
                <div>
                  <Image
                    src={"/assets/profile_placeholder.png"}
                    width={40}
                    height={40}
                    alt="img"
                    className="rounded-full inline-block "
                  />
                </div>
              </div>
              <hr className="h-[2px] text-black w-[100%]" />
              <div className="footer_text_container flex justify-between p-3">
                <span className="text-primary cursor-pointer">
                  See all profiles
                </span>
                <div className=" bg-red-500 rounded-[50%] p-1 h-6 cursor-pointer">
                  <p className="leading-none text-white ">9</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1">
            <Menu.Item className="font-800">
              {({ active }) => (
                <div className="flex hover:bg-gray-100  hover:rounded-lg p-3 items-center justify-between">
                  <div className=" flex">
                    <Image
                      src="/assets/setting.png"
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <a
                      href="#"
                      className={classNames(
                        active ? " text-gray-900 " : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      Setting & Privacy
                    </a>
                  </div>
                  <div>
                    <MdArrowForwardIos />
                  </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="font-800">
              {({ active }) => (
                <div className="flex hover:bg-gray-100  hover:rounded-lg p-3 items-center justify-between">
                  <div className=" flex">
                    <Image
                      src="/assets/help.jpg"
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <a
                      href="#"
                      className={classNames(
                        active ? " text-gray-900 " : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      Help & Support
                    </a>
                  </div>
                  <div>
                    <MdArrowForwardIos />
                  </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="font-800">
              {({ active }) => (
                <div className="flex hover:bg-gray-100  hover:rounded-lg p-3 items-center justify-between">
                  <div className=" flex">
                    <Image
                      src="/assets/display.png"
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <a
                      href="#"
                      className={classNames(
                        active ? " text-gray-900 " : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      Display & accessibility
                    </a>
                  </div>
                  <div>
                    <MdArrowForwardIos />
                  </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="font-800">
              {({ active }) => (
                <div className="flex hover:bg-gray-100  hover:rounded-lg p-3 items-center justify-between">
                  <div className=" flex">
                    <Image
                      src="/assets/feedback.png"
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <a
                      href="#"
                      className={classNames(
                        active ? " text-gray-900 " : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      Give feedback
                    </a>
                  </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="font-800">
              {({ active }) => (
                <div className="flex hover:bg-gray-100  hover:rounded-lg p-3 items-center justify-between">
                  <div className=" flex">
                    <Image
                      src="/assets/logout.png"
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <button
                      type="button"
                      onClick={signOut}
                      className={classNames(
                        active ? " text-gray-900 " : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </Menu.Item>
          </div>
          <p className="text-[14px] text-gray-500 mt-2 p-3">
            Privacy · Terms · Advertising · Ad choices · <br /> Cookies · More ·
            Meta © 2023
          </p>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
