import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load the contact me button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("CONTACT ME");

    expect(button).toBeInTheDocument();
  });

  test("Should load the input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("First name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load all the textboxes inside contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes);
    expect(inputBoxes.length).toBe(5);
  });
});
