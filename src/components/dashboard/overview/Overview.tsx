"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { AiFillProduct } from "react-icons/ai";

interface iOverviewStats {
  title: string;
  value: number;
  color: string;
  icon: any;
}

const Overview = () => {
  const stats: iOverviewStats[] = [
    {
      title: "Products",
      value: 4,
      color: "#A8DF4C",
      icon: <AiFillProduct size={"48px"} className="text-primary-shade-1" />,
    },
    {
      title: "Orders",
      value: 2,
      color: "#E5DC5F",
      icon: <AiFillProduct size={"48px"} className="text-primary-shade-2" />,
    },
    {
      title: "Services",
      value: 10,
      color: "#FFDA83",
      icon: <AiFillProduct size={"48px"} className="text-primary-shade-3" />,
    },
    {
      title: "Total",
      value: 16,
      color: "#1D4875",
      icon: <AiFillProduct size={"48px"} className="text-secondary" />,
    },
  ];

  useEffect(() => {
    useDashboardData.setState({ page: 0 });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-8 scrollbar-custom overflow-y-scroll">
      <div className="grid grid-cols-4 gap-8 w-full pt-10 px-1">
        {stats.map((stat, index) => {
          return (
            <div
              style={{
                backgroundColor: stat.color,
              }}
              className={`w-full h-[150px] flex justify-start items-center gap-2 shadow-custom-black rounded-[20px] overflow-hidden`}
              key={index}
            >
              <div className={`w-[180px] h-full rounded-tr-[60px] rounded-br-[60px] ${index === 3 ? "bg-white" : "bg-monokai"} flex justify-center items-center`}>
                {stat.icon}
              </div>
              <div className="w-full h-full p-4 flex flex-col justify-around">
                <h4 className={`text-lg ${index === 3 ? "text-white" : "text-monokai"}`}>{stat.title}</h4>
                <h2 className={`text-6xl ${index === 3 ? "text-white" : "text-monokai"} font-bold`}>{stat.value}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
