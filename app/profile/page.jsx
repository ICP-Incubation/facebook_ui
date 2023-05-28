"use client";
import MyProfile from "@/components/MyProfile";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Navbar />
      <MyProfile image={session?.user.image} name={session?.user.name} />
    </div>
  );
};

export default Profile;
