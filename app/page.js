"use client";
import Feed from "@/components/Feed";
import LeftSideBar from "@/components/LeftSideBar";
import Login from "@/components/Login";
import Navbar from '@/components/Navbar'
import RightSidebar from "@/components/RightSiderBar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()

  if (!session) return <Login />
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <RightSidebar />
      <Feed />
    </div>
  );
}

