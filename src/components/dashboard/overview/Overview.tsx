"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { AiFillProduct } from "react-icons/ai";
import { TbReorder } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { MdDonutSmall } from "react-icons/md";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import { AreaChart } from "@mantine/charts";
import { data } from "./data";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      title: "Users",
      value: 16,
      color: "#1D4875",
      icon: <MdDonutSmall size={"48px"} className="text-secondary" />,
    },
  ];

  const [percentage, setPercentage] = useState<number>(0);

  function animatePercentage() {
    let counter = 0;
    const intervalId = setInterval(() => {
      counter += 1;
      if (counter <= 75) {
        setPercentage((prevPercentage) => Math.min(prevPercentage + 1, 75));
        counter = 0;
      } else {
        clearInterval(intervalId);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }

  useEffect(() => {
    animatePercentage();
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
              className={`relative w-full h-[150px] flex justify-start items-center shadow-custom-black rounded-[20px] overflow-hidden`}
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
      <div className="w-full h-[400px] flex gap-8">
        <div className="p-5 w-[70%] h-full flex flex-col justify-between bg-white dark:bg-monokai shadow-custom-black dark:shadow-custom-white rounded-[20px] overflow-hidden">
          <div className="flex gap-5 w-full items-center justify-between">
            <h1 className="text-monokai dark:text-white text-3xl">
              Graph
            </h1>
            <div className="w-fit gap-3 flex items-center text-monokai dark:text-slate-300 cursor-pointer">
              <BsFillCalendar2WeekFill size={"16px"} />
              <h2 className="text-md">This Week</h2>
              <IoIosArrowDown size={"16px"} />
            </div>
          </div>

          <AreaChart
            h={300}
            data={data}
            dataKey="date"
            series={[{ name: "Apples", color: "myColor.6" }]}
            curveType="bump"
            gridAxis="none"
            withXAxis={false}
            withYAxis={false}
          />
        </div>
        <div className="w-[30%] p-5 h-full rounded-[20px] gap-8 bg-white dark:bg-monokai shadow-custom-black dark:shadow-custom-white flex flex-col items-center">
          <div className="flex flex-col gap-5 w-full items-start">
            <h1 className="text-monokai dark:text-white text-3xl">
              Perfomance
            </h1>
            <div className="flex justify-between items-center w-full">
              <div className="w-fit gap-3 flex items-center">
                <div className="size-4 rounded-md bg-primary" />
                <h2 className="text-monokai dark:text-white text-md">
                  Progress
                </h2>
              </div>

              <div className="w-fit gap-3 flex items-center text-monokai dark:text-slate-300 cursor-pointer">
                <BsFillCalendar2WeekFill size={"16px"} />
                <h2 className="text-md">This Week</h2>
                <IoIosArrowDown size={"16px"} />
              </div>
            </div>
          </div>

          <div
            style={{ width: 180, height: 180 }}
            className="dark:block hidden"
          >
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `#39E058`,
                textColor: "#FFFFFF",
                trailColor: "#202020",
              })}
            />
          </div>
          <div
            style={{ width: 180, height: 180 }}
            className="dark:hidden block"
          >
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `#39E058`,
                textColor: "#131313",
                trailColor: "#E5E5E5",
              })}
            />
          </div>
          <h2 className="text-md text-monokai dark:text-slate-300">
            15% more than last week
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
