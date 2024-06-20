import React, { useState } from "react";

import Image from "next/image";
import Logo from "@/public/Logo.png";

import {
  TbLayoutDashboard,
  TbLayoutDashboardFilled,
  TbSettings,
  TbSettingsFilled,
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { motion } from "framer-motion";
import { iNavigationItem } from "./types";

const DashboardNavigation = () => {
  const navs: iNavigationItem[] = [
    {
      name: "Overview",
      active: <TbLayoutDashboardFilled size={"26px"} />,
      inactive: <TbLayoutDashboard size={"26px"} />,
    },
    {
      name: "Settings",
      active: <TbSettingsFilled size={"26px"} />,
      inactive: <TbSettings size={"26px"} />,
    },
  ];

  const [expanded, setExpanded] = useState<boolean>(true);
  const currentPage = useDashboardData((state) => state.page);

  const routeToPage = (page: number) => {
    let path: string = "";
    switch (page) {
      case 0: {
        path = "/overview";
        break;
      }
      case 1: {
        path = "/settings";
        break;
      }
    }

    window.location.assign(`/dashboard/${path}`);
  };

  return (
    <div
      className={`${
        expanded
          ? "w-[20%] px-5 rounded-tr-[20px] rounded-br-[20px]"
          : "w-[70px] px-3 rounded-tr-[10px] rounded-br-[10px]"
      } h-[100vh] overflow-hidden pt-5 duration-300 transition-all ease-in flex flex-col gap-10 items-start dark:shadow-custom-white shadow-custom-black bg-white dark:bg-monokai`}
    >
      <div className="relative w-full flex items-center">
        <Image
          src={Logo}
          alt="logo"
          className={`${
            expanded ? "scale-100" : "scale-0"
          } w-[96px] h-auto object-cover duration-300 transition-all ease-out`}
        />
        <h1 className={`text-2xl ${expanded ? "translate-x-0 scale-100" : "translate-x-40 scale-75"} text-monokai dark:text-white duration-500 transition-all ease-out`}>
          Su
          <span className="text-primary">re Ag</span>
          ro
        </h1>
        <div
          onClick={() => setExpanded(!expanded)}
          className={`cursor-pointer absolute ${
            expanded ? "left-[90%]" : "left-3"
          } -top-2 duration-300 transition-all ease-out`}
        >
          {expanded ? (
            <TbLayoutSidebarLeftCollapseFilled
              size={"26px"}
              className="text-monokai dark:text-white"
            />
          ) : (
            <TbLayoutSidebarRightCollapseFilled
              size={"26px"}
              className="text-monokai dark:text-white"
            />
          )}
        </div>
      </div>
      <div className={`flex flex-col w-full  gap-2 `}>
        {navs.map((navItem: iNavigationItem, i: number) => {
          return (
            <div
              onClick={() => {
                useDashboardData.getState().setPage(i);
                routeToPage(i);
              }}
              key={i}
              className={`w-full flex py-2 px-2 rounded-[10px] gap-2 items-center cursor-pointer hover:bg-primary-80 ${
                currentPage === i
                  ? "bg-primary text-white dark:shadow-custom-white shadow-custom-black"
                  : "text-monokai dark:text-white"
              } hover:text-white hover:scale-105 scale-100 transition-all ease-out duration-200`}
            >
              <div style={{ fontSize: "26px" }}>
                {currentPage === i && navItem.active}
                {currentPage !== i && navItem.inactive}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-monkai dark:text-white hover:text-white text-md duration-500 ${
                  !expanded && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {navItem.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardNavigation;
