import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load the header component with a sign up button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const signInbutton = screen.getByRole("button", { name: "Sign In" });

  //const signInbutton = screen.getByText("Sign In");

  expect(signInbutton).toBeInTheDocument();
});

test("Should load the header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart (0 items)");

  expect(cartItem).toBeInTheDocument();
});

test("Should load the header component with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); //regex

  expect(cartItems).toBeInTheDocument();
});

test("Should change Sign In button to Sign Out inside the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const SignInbutton = screen.getByRole("button", { name: "Sign In" });

  fireEvent.click(SignInbutton);

  const SignOutbutton = screen.getByRole("button", { name: "Sign Out" });

  expect(SignOutbutton).toBeInTheDocument();
});
