"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
