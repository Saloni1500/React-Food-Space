// import { fireEvent, render, screen } from "@testing-library/react";
// import RestaurantMenu from "../RestaurantMenu";
// import { act } from "react";
// import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
// import { Provider } from "react-redux";
// import appStore from "./../../utils/appStore";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA_NAME),
//   })
// );

// test("Should render Restaurant Menu Component", async () => {
//   await act(async () =>
//     render(
//       <Provider store={appStore}>
//         <RestaurantMenu />
//       </Provider>
//     )
//   );

//   const accordionHeaders = screen.getByText("Gourmet Cakes");
//   // fireEvent.click(accordionHeaders);

//   // expect(screen.getAllByTestId("foodItems").length).toBe(16);
// });

import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Gourmet Cakes (7)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  expect(screen.getByText("ADD ITEMS TO THE CART")).toBeInTheDocument();
});
