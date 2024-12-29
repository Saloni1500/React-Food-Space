import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("Should Search Restaurant List for Burger Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const SearchButton = screen.getByRole("button", { name: "Search" });

  const SearchInput = screen.getByTestId("searchInput");
  //const SearchInput = screen.getByTestId(" Search for restaurant and food");

  fireEvent.change(SearchInput, { target: { value: "burger" } });

  fireEvent.click(SearchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});

test("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFiltering = screen.getAllByTestId("resCard");

  expect(cardsBeforeFiltering.length).toBe(20);

  const topRatedResBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedResBtn);

  const cardsAfterFiltering = screen.getAllByTestId("resCard");

  expect(cardsAfterFiltering.length).toBe(5);
});
