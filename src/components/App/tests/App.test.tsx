import { render, screen } from "@testing-library/react";
import App from "../App";

describe("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("NYT Movie Reviews");
  expect(linkElement).toBeInTheDocument();
});
