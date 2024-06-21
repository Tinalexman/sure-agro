import React, { useEffect, useState, FC } from "react";
import * as TbIcons from "react-icons/tb";
import { IconType } from "react-icons";
import { Loader } from "@mantine/core";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { isNumeric } from "@/src/functions/base";

interface Library {
  [key: string]: Record<string, IconType>;
}

const PAGE_SIZE = 64;

const IconBrowser: FC = () => {
  const [libraries, setLibraries] = useState<Library>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLibraries = async (): Promise<void> => {
      const libraries: Library = {
        icons: TbIcons,
      };
      setLibraries(libraries);
      setLoading(false);
    };
    loadLibraries();
  }, []);

  const renderIcons = (
    library: Record<string, IconType>,
    page: number
  ): JSX.Element[] => {
    const iconsArray = Object.values(library);
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return iconsArray.slice(startIndex, endIndex).map((Icon, index) => (
      <div
        key={index}
        className="cursor-pointer flex justify-center items-center hover:bg-primary hover:dark:bg-primary p-1 rounded transition-all ease-in duration-200"
      >
        <Icon size={"28px"} className="text-monokai dark:text-white " />
      </div>
    ));
  };

  const totalIcons = Object.values(libraries.icons || {}).length;
  const totalPages = Math.ceil(totalIcons / PAGE_SIZE);

  const [pageIndex, setPageIndex] = useState<string>("1");

  return (
    <div className="w-full">
      {loading ? (
        <div className="w-full h-20 flex justify-center items-center">
          <Loader color="myColor.9" />
        </div>
      ) : (
        <>
          {Object.entries(libraries).map(([libName, icons]) => (
            <div key={libName} className="grid grid-cols-8 gap-4">
              {renderIcons(icons, currentPage)}
            </div>
          ))}
          <div className="flex justify-center items-center gap-4 mt-10">
            <MdArrowBackIos
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              size={"24px"}
              className={`text-monokai dark:text-white ${
                currentPage === 1 && "hidden"
              } cursor-pointer`}
            />
            <div className="w-fit gap-2 flex items-center">
              <input
                type="number"
                value={pageIndex}
                onChange={(e) => {
                  let val = e.target.value.trim();
                  if (val === "") {
                    val = "1";
                  }

                  if (isNumeric(val) && parseInt(val) <= totalPages) {
                    setCurrentPage(parseInt(val));
                    setPageIndex(val);
                  }
                }}
              />
              <p className="text-monokai dark:text-white">{`of ${totalPages}`}</p>
            </div>
            <MdArrowForwardIos
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              size={"24px"}
              className={`text-monokai dark:text-white ${
                currentPage === totalPages && "hidden"
              } cursor-pointer`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default IconBrowser;
