import { faker } from "@faker-js/faker";
import { getRandomInt, numberToFixedLengthHex } from "@/src/functions/base";

import * as TbIcons from "react-icons/tb";
import { IconType } from "react-icons";

const allIcons: IconType[] = Object.values(TbIcons);

export type tCategory = {
  id: string;
  name: string;
  contents: string[];
  color: string;
  icon: IconType;
};

export function createRandomCategory(): tCategory {
  let hexCode = `#${numberToFixedLengthHex(getRandomInt(0, 16777215))}`;
  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    contents: Array(getRandomInt(5, 14)).fill(
      faker.commerce.productDescription()
    ),
    color: hexCode,
    icon: getRandomIcon(),
  };
}

export function createRandomCategories(count: number): tCategory[] {
  return faker.helpers.multiple(createRandomCategory, {
    count: count,
  });
}

export function getRandomIcon(): IconType {
  const randomIndex = Math.floor(Math.random() * allIcons.length);
  return allIcons[randomIndex];
}
