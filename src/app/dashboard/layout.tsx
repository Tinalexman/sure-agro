"use client";

import DashboardNavigation from "@/src/components/dashboard/DashboardNavigation";
import { convertDate } from "@/src/functions/dateFunctions";
import { FC, ReactNode } from "react";

import Image from "next/image";

import { FiSearch } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

import { useMantineColorScheme } from "@mantine/core";

interface iDashboardLayout {
  children: ReactNode;
}

const DashboardLayout: FC<iDashboardLayout> = ({ children }) => {
  const { setColorScheme } = useMantineColorScheme();


  return (
    <div className="w-[100vw] h-[100vh] flex dark:bg-monokai bg-white">
      <DashboardNavigation />
      <div className="w-full h-[100vh] flex flex-col px-8 py-5 bg-slate-50 dark:bg-monokai-faded">
        <div className="h-[100px] w-full flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="big-3">Welcome Back, 🥳</h1>
            <p className="text-md text-monokai dark:text-white">
              {convertDate(new Date())}
            </p>
          </div>

          <div className="w-fit flex items-center gap-5">
            <div className="w-[250px] relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4"
              />
              <FiSearch
                className="text-contrast-base absolute top-[10px] left-2"
                size={"20px"}
              />
            </div>
            <div className="size-10 rounded-[10px] shadow-custom-black dark:shadow-custom-white cursor-pointer flex justify-center items-center bg-white dark:bg-monokai">
              <RiNotification2Line
                size={"26px"}
                className="text-monokai dark:text-white"
              />
            </div>

            <div className="block dark:hidden">
              <FaMoon onClick={() => setColorScheme("dark")} size={"22px"} className="text-monokai cursor-pointer" />
            </div>

            <div className="hidden dark:block">
              <FaSun onClick={() => setColorScheme("light")} size={"22px"} className="text-white cursor-pointer" />
            </div>

            <Image
              src={`https://gravatar.com/avatar/dummyID?s=400&d=robohash&r=x`}
              alt="profile-picture"
              width={50}
              height={50}
              className="object-cover size-10 rounded-[10px] bg-red-300 dark:shadow-custom-white shadow-custom-black"
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
