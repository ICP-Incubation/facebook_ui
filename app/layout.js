"use client";
import "@/styles/globals.css";
import Provider from "@/components/Provider";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook Clone",
  description: "Let's get connected",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
