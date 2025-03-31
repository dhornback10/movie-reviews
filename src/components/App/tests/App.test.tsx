import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("App Component", () => {
  it("displays the title when rendered", () => {
    render(<App />);
    const title = screen.getByText("NYT Movie Reviews");
    expect(title).toBeInTheDocument();
  });
});
