import { faker } from "@faker-js/faker";

import { getRandomInt, numberToFixedLengthHex } from "@/src/functions/base";

export type tCategory = {
  id: string;
  name: string;
  contents: string[];
  color: string;
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
  };
}

export function createRandomCategories(count: number): tCategory[] {
  return faker.helpers.multiple(createRandomCategory, {
    count: count,
  });
}
