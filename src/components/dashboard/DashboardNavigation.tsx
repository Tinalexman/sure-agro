import React, { useState } from "react";

import Image from "next/image";
import Logo from "@/public/Logo.png";

import {
  TbLayoutDashboard,
  TbLayoutDashboardFilled,
  TbSettings,
  TbSettingsFilled,
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
      className={`w-[20%] h-[100vh] flex flex-col gap-10 items-start px-5 dark:shadow-custom-white shadow-custom-black bg-white dark:bg-monokai`}
    >
      <Image src={Logo} alt="logo" />
      <div className={`flex flex-col w-full gap-2`}>
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
              {currentPage === i ? navItem.active : navItem.inactive}
              <p
                className={`text-monkai dark:text-white hover:text-white text-md`}
              >
                {navItem.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardNavigation;
