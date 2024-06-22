"use client";

import React, { useEffect, useState } from "react";

import { useDashboardData } from "@/src/stores/dashboardStore";

import { HiGift } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";

import { Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddCategory from "./AddCategoryModal";

import { tCategory, createRandomCategories } from "./types";
import CategoryContainer from "./CategoryContainer";

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [categories, setCategories] = useState<tCategory[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<tCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const filter = useDashboardData((state) => state.searchFilter);

  
  
  function searchCategories(search: string) {

    console.log("In search");
  }

  useEffect(() => {
    useDashboardData.setState({ page: 1 });
    let c = createRandomCategories(18);
    setCategories(c);
    setFilteredCategories(c);
    setLoading(false);
  }, []);

  
  searchCategories(filter);

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
              Create Category
              <IoAdd size={"26px"} />
            </button>
          </div>
        </div>
        {!loading && (
          <div className="w-full grid grid-cols-4 gap-6 px-4">
            {categories.map((category, i) => {
              return <CategoryContainer key={i} category={category} />;
            })}
          </div>
        )}
        {loading && (
          <div className="w-full h-full flex justify-center items-center">
            <Loader color="myColor.9" />
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
