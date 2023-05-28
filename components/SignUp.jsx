"use client";
import { RxCross2 } from "react-icons/rx";
import LinkTag from "@/utils/LinkTag";
import GenderSelector from "@/utils/GenderSelector";
import DateSelector from "@/utils/DateSelector";

const SignUp = ({ onClose }) => {
  return (
    <>
      <div className="absolute bg-white p-6 shadow-lg shadow-black-500/50 rounded-lg w-96 h-auto top-6 right-1/3">
        <div className="relative">
          <h1 className="text-4xl font-bold text-black">Sign Up</h1>
          <p className="text-gray-600 font-normal">It is quick and easy</p>
          <RxCross2
            onClick={onClose}
            className="w-6 h-6 text-black cursor-pointer absolute text-base top-0 right-0"
          />
        </div>
        <hr className="h-px bg-gray-300 my-4" />
        <div className="flex">
          <form action="#" className="w-full">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Mobile number or email"
              className="w-full p-3 my-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 my-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <label htmlFor="birthday" className="text-gray-700">
              Birthday
            </label>
            <DateSelector />
            <label htmlFor="birthday" className="text-gray-700">
              Gender
            </label>
            <GenderSelector />
            <p className="text-sm text-gray-500 my-3">
              People who use our service may have uploaded your contact
              information to Facebook.
              <LinkTag
                link={"https://www.facebook.com/help/637205020878504"}
                name={"Learn more"}
              />
            </p>
            <p className="text-sm text-gray-500">
              By clicking Sign Up, you agree to our
              <LinkTag
                link={"https://www.facebook.com/legal/terms/update"}
                name={"Terms"}
              />
              ,
              <LinkTag
                link={
                  "https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                }
                name={"Privacy Policy"}
              />
              and
              <LinkTag
                link={
                  "https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
                }
                name={"Cookies Policy"}
              />
              . You may receive SMS Notifications from us and can opt out any
              time.
            </p>
            <button className="bg-blue-500 text-white text-lg font-bold w-full py-3 rounded-md cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
