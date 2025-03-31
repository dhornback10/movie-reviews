import { render, screen } from "@testing-library/react";
import React from "react";
import { IMovieReview } from "../../../../types";
import DetailsPage from "../DetailsPage";
import { useSelectedMovieReview } from "../../../../hooks";
import { useNavigate } from "react-router";

jest.mock("../../../../hooks", () => ({
  useSelectedMovieReview: jest.fn(),
}));

jest.mock("react-router", () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

const mockUseSelectedMovieReview =
  useSelectedMovieReview as jest.MockedFunction<typeof useSelectedMovieReview>;
const mockNavigate = useNavigate as jest.MockedFunction<typeof useNavigate>;

const mockSelectedReview: IMovieReview = {
  headline: "Mock Headline",
  publication_date: "2025-01-01",
  abstract: "Mock Abstract",
  url: "https://example.com",
  byline: "Mock Byline",
  section: "Movies",
};

describe("DetailsPage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the DetailsPage title and selected review headline when rendered", () => {
    mockUseSelectedMovieReview.mockReturnValue(mockSelectedReview);

    render(<DetailsPage />);

    const title = screen.getByText("Review Details");
    const headline = screen.getByText("Mock Headline");

    expect(title).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
  });

  it("should call the navigate function when no review is selected", () => {
    mockUseSelectedMovieReview.mockReturnValue({
      headline: "",
      publication_date: "",
      abstract: "",
      url: "",
      byline: "",
      section: "",
    });

    render(<DetailsPage />);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
