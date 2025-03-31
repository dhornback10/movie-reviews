import { render, screen } from "@testing-library/react";
import React from "react";
import LoadingIndicator from "../LoadingIndicator";

describe("LoadingIndicator Component", () => {
  it("should display the LoadingIndicator when rendered", () => {
    render(<LoadingIndicator />);
    const loadingIndicator = screen.getByTestId("loading-indicator");
    expect(loadingIndicator).toBeInTheDocument();
  });
});
