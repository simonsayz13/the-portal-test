import { sortRoute } from "../utility/util";

test("Sorting route function should return a list of sorted route objects", () => {
  const routeArray = [
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
  ];

  const sortedRoute = sortRoute(routeArray);

  expect(sortedRoute).toEqual([
    { product_code: "26982", quantity: "1", pick_location: "B 2" },
    { product_code: "36389", quantity: "4", pick_location: "F 1" },
    { product_code: "25214", quantity: "10", pick_location: "F 2" },
    { product_code: "25636", quantity: "1", pick_location: "AZ 4" },
    { product_code: "15248", quantity: "10", pick_location: "AZ 5" },
  ]);
});
