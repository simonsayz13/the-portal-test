import { sortRouteV1, sortRouteV2 } from "../utility/util";
import { StressTestData } from "../data/unit_test_data";

test("sortRouteV1 function should return the correct answer ", () => {
  const routeArray = [
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
  ];
  const sortedRoute = sortRouteV1(routeArray);
  expect(sortedRoute).toEqual([
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
  ]);
});

test("sortRouteV2 function should return the correct answer ", () => {
  const routeArray = [
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
  ];
  const sortedRoute = sortRouteV2(routeArray);
  expect(sortedRoute).toEqual([
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
  ]);
});

test("Stress test and comparing different sort comparators", () => {
  console.time("sortRouteV1");
  sortRouteV1(StressTestData);
  console.timeEnd("sortRouteV1");

  console.time("sortRouteV2");
  sortRouteV2(StressTestData);
  console.timeEnd("sortRouteV2");
});
