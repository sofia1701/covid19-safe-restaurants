import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

test("renders the app and all its components correctly ", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const component = asFragment();

  expect(component).toMatchSnapshot();
});
