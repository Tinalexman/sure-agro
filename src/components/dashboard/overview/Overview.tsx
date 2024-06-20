"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { AiFillProduct } from "react-icons/ai";
import { TbReorder } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { MdDonutSmall } from "react-icons/md";

import { AreaChart } from "@mantine/charts";
import { data } from "./data";

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
      icon: <TbReorder size={"48px"} className="text-primary-shade-2" />,
    },
    {
      title: "Services",
      value: 10,
      color: "#FFDA83",
      icon: <FaServicestack size={"48px"} className="text-primary-shade-3" />,
    },
    {
      title: "Total",
      value: 16,
      color: "#1D4875",
      icon: <MdDonutSmall size={"48px"} className="text-secondary" />,
    },
  ];

  useEffect(() => {
    useDashboardData.setState({ page: 0 });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-8 scrollbar-custom overflow-y-scroll px-[2px]">
      <div className="grid grid-cols-4 gap-8 w-full pt-10">
        {stats.map((stat, index) => {
          return (
            <div
              style={{
                backgroundColor: stat.color,
              }}
              className={`w-full h-[150px] flex justify-start items-center shadow-custom-black rounded-[20px] overflow-hidden`}
              key={index}
            >
              <div
                className={`w-[180px] h-full rounded-tr-[60px] rounded-br-[60px] ${
                  index === 3 ? "bg-white" : "bg-monokai"
                } flex justify-center items-center`}
              >
                {stat.icon}
              </div>
              <div className="w-full h-full p-4 flex flex-col justify-around">
                <h4
                  className={`text-lg ${
                    index === 3 ? "text-white" : "text-monokai"
                  }`}
                >
                  {stat.title}
                </h4>
                <h2
                  className={`text-6xl ${
                    index === 3 ? "text-white" : "text-monokai"
                  } font-bold`}
                >
                  {stat.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[350px] flex gap-8">
        <div className="w-[70%] h-full bg-white dark:bg-monokai shadow-custom-black dark:shadow-custom-white rounded-[20px] overflow-hidden">
          <AreaChart
            h={350}
            data={data}
            dataKey="date"
            series={[
              { name: "Apples", color: "indigo.6" },
              { name: "Oranges", color: "blue.6" },
              { name: "Tomatoes", color: "teal.6" },
            ]}
            curveType="bump"
            tickLine="xy"
            gridAxis="none"
          />
        </div>
        <div className="w-[30%] h-full rounded-[20px] bg-white dark:bg-monokai shadow-custom-black dark:shadow-custom-white">

        </div>
      </div>
    </div>
  );
};

export default Overview;
