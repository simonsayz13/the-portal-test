import { createObjectCsvWriter } from "csv-writer";
import { ItemData } from "../types/types";
import { RESULT_FILE } from "../config/constants";

export function sortRouteV1(inputArray: Array<ItemData>): Array<ItemData> {
  return inputArray.sort((itemA: ItemData, itemB: ItemData) => {
    const itemABay: string = itemA.pick_location.split(" ")[0].toLowerCase();
    const itemBBay: string = itemB.pick_location.split(" ")[0].toLowerCase();
    const itemAShelf: number = Number(
      itemA.pick_location.split(" ")[1].toLowerCase()
    );
    const itemBShelf: number = Number(
      itemB.pick_location.split(" ")[1].toLowerCase()
    );
    if (itemABay.length < itemBBay.length) {
      return -1;
    }
    if (itemABay.length > itemBBay.length) {
      return 1;
    }
    if (itemABay < itemBBay) {
      return -1;
    }
    if (itemABay > itemBBay) {
      return 1;
    }
    if (itemAShelf < itemBShelf) {
      return -1;
    }
    if (itemAShelf > itemBShelf) {
      return 1;
    }
    return 0;
  });
}

export function sortRouteV2(inputArray: Array<ItemData>): Array<ItemData> {
  inputArray.sort((itemA: ItemData, itemB: ItemData) => {
    const [itemABay, itemAShelf] = itemA.pick_location.split(" ");
    const [itemBBay, itemBShelf] = itemB.pick_location.split(" ");

    if (itemABay.length < itemBBay.length) {
      return -1;
    }
    if (itemABay.length > itemBBay.length) {
      return 1;
    }
    if (itemABay < itemBBay) {
      return -1;
    }
    if (itemABay > itemBBay) {
      return 1;
    }
    if (itemAShelf < itemBShelf) {
      return -1;
    }
    if (itemAShelf > itemBShelf) {
      return 1;
    }
    return 0;
  });
  return inputArray;
}

export function writeResult(resultArray: Array<ItemData>): void {
  const csvWriter = createObjectCsvWriter({
    path: RESULT_FILE,
    header: [
      { id: "product_code", title: "product_code" },
      { id: "quantity", title: "quantity" },
      { id: "pick_location", title: "pick_location" },
    ],
  });

  csvWriter
    .writeRecords(resultArray)
    .then(() => {
      console.log("Result CSV file written successfully...");
    })
    .catch((error) => {
      console.error(error);
    });
}
