"use client";

import DashboardNavigation from "@/src/components/dashboard/DashboardNavigation";
import { convertDate } from "@/src/functions/dateFunctions";
import { FC, ReactNode } from "react";

import { v4 } from "uuid";

import Image from "next/image";

import { FiSearch } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";

interface iDashboardLayout {
  children: ReactNode;
}

const DashboardLayout: FC<iDashboardLayout> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex dark:bg-monokai bg-white">
      <DashboardNavigation />
      <div className="w-full h-[100vh] flex flex-col px-8 py-5 bg-slate-50 dark:bg-monokai-faded">
        <div className="h-[100px] w-full flex items-center justify-between">
          <div className="flex flex-col gap-1 text-monokai dark:text-white">
            <h1 className="text-3xl">Welcome Back, 🥳</h1>
            <p className="text-md">{convertDate(new Date())}</p>
          </div>

          <div className="w-fit flex items-center gap-5">
            <div className="w-[250px] relative">
              <input type="text" placeholder="Search..." className="w-full" />
              <FiSearch
                className="text-contrast-base absolute top-[10px] left-2"
                size={"20px"}
              />
            </div>
            <div className="size-10 rounded-[10px] shadow-custom-black dark:shadow-custom-white cursor-pointer flex justify-center items-center bg-white dark:bg-monokai">
              <RiNotification2Line size={"26px"} className="text-monokai dark:text-white" />
            </div>
            <Image
              src={`https://gravatar.com/avatar/${v4()}?s=400&d=robohash&r=x`}
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
