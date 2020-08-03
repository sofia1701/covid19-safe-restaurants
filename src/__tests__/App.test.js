import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the app and all its components correctly ", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
