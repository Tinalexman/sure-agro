import { Modal } from "@mantine/core";
import React, { FC, useState } from "react";
import { MdOutlineDone } from "react-icons/md";

import { HiOutlineGift } from "react-icons/hi";
import { IoAdd, IoCloseOutline } from "react-icons/io5";
import { tCategory } from "@/src/stores/categoryStore";

import { faker } from "@faker-js/faker";

const AddCategory: FC<{ opened: boolean; close: () => void }> = ({
  opened,
  close,
}) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([
    
  ]);

  function addCategory(value: string) {
    if (value.length === 0) return;
    setCategories([...categories, value]);
    setCategory("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addCategory(category);
    }
  }

  return (
    <Modal.Root
      opened={opened}
      onClose={close}
      padding={"0px"}
      top={"0px"}
      centered
    >
      <Modal.Overlay />
      <Modal.Body>
        <Modal.Content>
          <div className="flex flex-col items-center gap-5 bg-white dark:bg-monokai px-5 py-8">
            <h1 className="big-2 text-center">Create New Category</h1>

            <div className="w-full flex flex-col gap-1 relative">
              <label className="text-md text-neutral-dark dark:text-neutral-light">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter category name"
                className="w-full pl-10 pr-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <HiOutlineGift
                className="text-contrast-base absolute top-[38px] left-2"
                size={"22px"}
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <label className="text-md text-neutral-dark dark:text-neutral-light">
                Category Contents
              </label>

              {categories.length > 0 && (
                <div className="flex flex-wrap gap-4 items-center">
                  {categories.map((ct, i) => {
                    return (
                      <div
                        key={i}
                        className="px-2 py-1 rounded bg-neutral-light dark:bg-neutral-dark text-monokai dark:text-white cursor-pointer gap-1 flex items-center"
                      >
                        {ct}
                        <IoCloseOutline
                          size={"20px"}
                          onClick={() =>
                            setCategories(
                              categories.filter((_, index) => index !== i)
                            )
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter category content"
                  className="w-full pl-4 pr-10"
                  value={category}
                  onKeyDown={(e) => onKeyDown(e)}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <MdOutlineDone
                  className="text-contrast-base absolute top-[10px] right-2 cursor-pointer"
                  size={"22px"}
                  onClick={() => addCategory(category)}
                />
              </div>
            </div>

            <button
              onClick={close}
              className="rounded-[10px] font-medium flex items-center gap-2 justify-center text-lg bg-primary text-monokai dark:text-white w-full py-2 transition-colors duration-300 ease-out"
            >
              Add Category
              <IoAdd size={"26px"} />
            </button>
          </div>
        </Modal.Content>
      </Modal.Body>
    </Modal.Root>
  );
};

export default AddCategory;
