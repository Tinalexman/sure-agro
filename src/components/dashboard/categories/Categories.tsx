"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { IoAdd } from "react-icons/io5";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddCategory from "./AddCategory";

import { faker } from "@faker-js/faker";
import { tCategory } from "@/src/stores/categoryStore";

//CATGORU #OTA FOOD PRICES #CONTENT - YAM-2500
//  (FOOD PRICES, AGRIC TIPS, UPDATES) CATGORIES --  (E.G YAM -2500, )

function createRandomCategory(): tCategory {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    contents: Array(10).fill(faker.commerce.productDescription()),
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
    setCategories(createRandomCategories(16));
  }, []);

  return (
    <>
      <AddCategory opened={opened} close={close} />
      <div className="w-full h-full flex flex-col gap-10 pt-10">
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
              className="rounded-[10px] font-medium flex items-center gap-2 justify-center text-lg hover:bg-primary bg-neutral-light dark:bg-neutral-dark text-monokai dark:text-white px-5 py-2 transition-colors duration-300 ease-out"
            >
              Add Category
              <IoAdd size={"26px"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
