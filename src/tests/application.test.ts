import { sortRouteV1, sortRouteV2, sortRouteV3 } from "../utility/util";
import { StressTestData } from "../data/unit_test_data";

test("sortRouteV1 function should return the correct answer ", () => {
  const routeArray = [
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "26982", quantity: "1", pick_location: "AC 10" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
  ];
  const sortedRoute = sortRouteV1(routeArray);
  expect(sortedRoute).toEqual([
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "26982", quantity: "1", pick_location: "AC 10" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
  ]);
});

test("sortRouteV2 function should return the correct answer ", () => {
  const routeArray = [
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "26982", quantity: "1", pick_location: "AC 10" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
  ];
  const sortedRoute = sortRouteV2(routeArray);
  expect(sortedRoute).toEqual([
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "26982", quantity: "1", pick_location: "AC 10" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
  ]);
});

test("sortRouteV3 function should return the correct answer ", () => {
  const routeArray = [
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "26982", quantity: "1", pick_location: "AC 10" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
  ];
  const sortedRoute = sortRouteV3(routeArray);
  expect(sortedRoute).toEqual([
    {
      product_code: "26982",
      quantity: "1",
      pick_location: "B 2",
      bay: "B",
      shelf: 2,
    },
    {
      product_code: "36389",
      quantity: "4",
      pick_location: "F 1",
      bay: "F",
      shelf: 1,
    },
    {
      product_code: "25214",
      quantity: "10",
      pick_location: "F 2",
      bay: "F",
      shelf: 2,
    },
    {
      product_code: "26982",
      quantity: "1",
      pick_location: "AC 10",
      bay: "AC",
      shelf: 10,
    },
    {
      product_code: "25636",
      quantity: "1",
      pick_location: "AZ 4",
      bay: "AZ",
      shelf: 4,
    },
    {
      product_code: "15248",
      quantity: "10",
      pick_location: "AZ 5",
      bay: "AZ",
      shelf: 5,
    },
  ]);
});

test("Stress test and comparing different sort comparators", () => {
  console.time("sortRouteV1");
  sortRouteV1(StressTestData);
  console.timeEnd("sortRouteV1");

  console.time("sortRouteV2");
  sortRouteV2(StressTestData);
  console.timeEnd("sortRouteV2");

  console.time("sortRouteV3");
  sortRouteV3(StressTestData);
  console.timeEnd("sortRouteV3");
});
