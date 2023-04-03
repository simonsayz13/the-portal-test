import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { ItemData } from "./types/types";
import { sortRoute, writeResult } from "./utility/util";
import { FILE_PATH } from "./config/constants";

let routeArray: Array<ItemData> = [];

fs.createReadStream(path.resolve(__dirname, FILE_PATH))
  .pipe(csv())
  .on("data", (item: ItemData) => {
    routeArray.push(item);
  })
  .on("end", () => {
    routeArray = sortRoute(routeArray);
    writeResult(routeArray);
  });
