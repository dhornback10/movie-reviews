import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("App Component", () => {
  it("renders the app", () => {
    render(<App />);
    const title = screen.getByText("NYT Movie Reviews");
    expect(title).toBeInTheDocument();
  });
});
