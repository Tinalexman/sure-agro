import { Modal, Tabs } from "@mantine/core";
import React, { FC, useState } from "react";
import { MdOutlineDone } from "react-icons/md";

import { HiOutlineGift } from "react-icons/hi";
import { IoAdd, IoCloseOutline } from "react-icons/io5";

import ColorPicker from "@rc-component/color-picker";
import "@rc-component/color-picker/assets/index.css";
import IconBrowser from "./IconBrowser";

// Add color to the category and icon to differentiate the category

const AddCategory: FC<{ opened: boolean; close: () => void }> = ({
  opened,
  close,
}) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>("details");
  const [filled, setFilled] = useState<boolean>(false);
  

  function addCategory(value: string) {
    if (value.length === 0) return;

    if (!filled) {
      setFilled(true);
    }

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
      size={"35vw"}
      centered
    >
      <Modal.Overlay />
      <Modal.Body>
        <Modal.Content>
          <div className="flex flex-col items-center gap-8 bg-white dark:bg-monokai px-10 py-8">
            <h1 className="big-2 text-center">Create New Category</h1>

            <Tabs
              color="myColor"
              radius="xs"
              defaultValue="details"
              w={"100%"}
              value={activeTab}
              onChange={setActiveTab}
            >
              <Tabs.List grow justify="center">
                <Tabs.Tab value="details">Details</Tabs.Tab>
                <Tabs.Tab value="icon">Icon (Optional)</Tabs.Tab>
                <Tabs.Tab value="color">Color (Optional)</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="details">
                <div className="flex flex-col gap-5 py-4">
                  <div className="w-full flex flex-col gap-1 relative">
                    <label className="text-md text-neutral-dark dark:text-neutral-light">
                      Category Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter category name"
                      className="w-full pl-10 pr-4"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        setFilled(
                          e.target.value.length > 0 && categories.length > 0
                        );
                      }}
                    />
                    <HiOutlineGift
                      className="text-contrast-base absolute top-[38px] left-2"
                      size={"22px"}
                    />
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <label className="text-md text-neutral-dark dark:text-neutral-light">
                      Category Contents (Optional)
                    </label>

                    {categories.length > 0 && (
                      <div className="flex flex-wrap gap-4 items-center">
                        {categories.map((ct, i) => {
                          return (
                            <div
                              key={i}
                              className="max-w-[80px] line-clamp-1 px-2 py-1 rounded bg-neutral-light dark:bg-neutral-dark text-monokai dark:text-white cursor-pointer gap-1 flex items-center"
                            >
                              {ct}
                              <IoCloseOutline
                                size={"20px"}
                                onClick={() => {
                                  setFilled(categories.length - 1 > 0);
                                  setCategories(
                                    categories.filter((_, index) => index !== i)
                                  );
                                }}
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
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="icon">
                <div className="py-4 flex justify-center">
                  <IconBrowser />
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="color">
                <div className="py-4 flex justify-around items-center">
                  <ColorPicker
                    defaultValue={"#39E058"}
                    value={color}
                    className="bg-monokai"
                    onChange={(col, type) => {
                      setColor(col.toHexString());
                    }}
                  />
                  <div className="flex flex-col gap-4 ">
                    <h2>Preview</h2>

                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>

            <button
              onClick={close}
              className={`rounded-[10px] ${activeTab === "icon" && "hidden"} font-medium flex items-center gap-2 justify-center text-lg ${
                filled
                  ? "bg-primary"
                  : "bg-neutral-light : dark:bg-neutral-darkF"
              } text-monokai dark:text-white w-[180px] py-2 transition-colors duration-300 ease-out`}
            >
              Create Category
            </button>
          </div>
        </Modal.Content>
      </Modal.Body>
    </Modal.Root>
  );
};

export default AddCategory;
