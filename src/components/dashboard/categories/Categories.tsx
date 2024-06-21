"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { HiGift } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";

import { useDisclosure } from "@mantine/hooks";
import AddCategory from "./AddCategory";

import { faker } from "@faker-js/faker";
import { tCategory } from "./types";
import { getRandomInt, numberToFixedLengthHex } from "@/src/functions/base";

function createRandomCategory(): tCategory {
  let hexCode = `#${numberToFixedLengthHex(getRandomInt(0, 16777215))}`;
  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    contents: Array(getRandomInt(5, 14)).fill(
      faker.commerce.productDescription()
    ),
    color: hexCode,
  };
}

function createRandomCategories(count: number): tCategory[] {
  return faker.helpers.multiple(createRandomCategory, {
    count: count,
  });
}

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [categories, setCategories] = useState<tCategory[]>([]);

  useEffect(() => {
    useDashboardData.setState({ page: 1 });
    setCategories(createRandomCategories(18));
  }, []);

  return (
    <>
      <AddCategory opened={opened} close={close} />
      <div className="w-full h-full overflow-y-scroll scrollbar-custom  flex flex-col gap-10 pt-10">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="big-4">Category Manager</h1>
            <p className="text-md text-monokai dark:text-white">
              Manage all your categories all in one spot
            </p>
          </div>
          <div className="flex gap-5">
            <button
              onClick={open}
              className="rounded-[10px] font-medium flex items-center gap-2 justify-center text-lg hover:bg-primary hover:dark:bg-primary bg-neutral-light dark:bg-neutral-dark text-monokai dark:text-white px-5 py-2 transition-colors duration-300 ease-out"
            >
              Add Category
              <IoAdd size={"26px"} />
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-6 px-4">
          {categories.map((category, i) => {
            return (
              <div
                key={i}
                className="w-full h-[100px] flex justify-between items-center px-8 py-4 rounded-[10px] relative overflow-hidden shadow-custom-black dark:shadow-custom-white cursor-pointer transition-all duration-300 ease-out hover:scale-105 scale-100"
              >
                <div
                  className="w-3 h-full absolute top-0 left-0"
                  style={{
                    background: category.color,
                  }}
                />

                <div className="flex flex-col h-full">
                  <h1 className="big-1">{category.name}</h1>
                  <p className="text-md text-monokai dark:text-white underline">
                    {category.contents.length} items
                  </p>
                </div>
                <HiGift size={"36px"} className="text-neutral-dark dark:text-neutral-light" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
