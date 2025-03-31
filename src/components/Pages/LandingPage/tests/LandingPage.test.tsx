import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import {
  useNYTMovieReviews,
  useSetNYTMovieReviews,
  useSetSelectedMovieReview,
} from "../../../../hooks";
import { useNavigate } from "react-router";
import LandingPage from "../LandingPage";
import getMovieReviews from "../../../../functions/getMovieReviews";

jest.mock("../../../../hooks", () => ({
  useNYTMovieReviews: jest.fn(),
  useSetSelectedMovieReview: jest.fn(() => jest.fn()),
  useSetNYTMovieReviews: jest.fn(),
}));

jest.mock("../../../../functions/getMovieReviews", () =>
  jest.fn(() => Promise.resolve())
);

jest.mock("react-router", () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

const mockUseNYTMovieReviews = useNYTMovieReviews as jest.MockedFunction<
  typeof useNYTMovieReviews
>;
const mockUseSetSelectedMovieReview =
  useSetSelectedMovieReview as jest.MockedFunction<
    typeof useSetSelectedMovieReview
  >;
const mockUseSetNYTMovieReviews = useSetNYTMovieReviews as jest.MockedFunction<
  typeof useSetNYTMovieReviews
>;
const mockNavigate = useNavigate as jest.MockedFunction<typeof useNavigate>;

describe("LandingPage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the LandingPage title and button when rendered", () => {
    mockUseNYTMovieReviews.mockReturnValue(null);
    render(<LandingPage />);

    const title = screen.getByText("NYT Movie Reviews");
    const button = screen.getByText("Retrieve NYT Movie Reviews!");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should call getMovieReviews and setUseNYTMovieReviews when first button is clicked", () => {
    render(<LandingPage />);

    const button = screen.getByText("Retrieve NYT Movie Reviews!");
    fireEvent.click(button);
    expect(getMovieReviews).toHaveBeenCalled();
    expect(mockUseSetNYTMovieReviews).toHaveBeenCalled();
  });

  it("should display the movie reviews list when they're retrieved them from the API", () => {
    mockUseNYTMovieReviews.mockReturnValue([
      {
        headline: "Mock Headline 1",
        publication_date: "2025-01-01",
        abstract: "Mock Abstract 1",
        url: "https://example.com/1",
        byline: "Mock Byline 1",
        section: "Movies",
      },
      {
        headline: "Mock Headline 2",
        publication_date: "2025-01-02",
        abstract: "Mock Abstract 2",
        url: "https://example.com/2",
        byline: "Mock Byline 2",
        section: "Movies",
      },
    ]);
    render(<LandingPage />);

    const review1 = screen.getByText("Mock Headline 1");
    const review2 = screen.getByText("Mock Headline 2");

    expect(review1).toBeInTheDocument();
    expect(review2).toBeInTheDocument();
  });

  it("should set selectedMovieReview when More Info button is clicked", () => {
    mockUseNYTMovieReviews.mockReturnValue([
      {
        headline: "Mock Headline 1",
        publication_date: "2025-01-01",
        abstract: "Mock Abstract 1",
        url: "https://example.com/1",
        byline: "Mock Byline 1",
        section: "Movies",
      },
      {
        headline: "Mock Headline 2",
        publication_date: "2025-01-02",
        abstract: "Mock Abstract 2",
        url: "https://example.com/2",
        byline: "Mock Byline 2",
        section: "Movies",
      },
    ]);
    render(<LandingPage />);

    const review2MoreInfoButton = screen.getAllByText("More Information")[1];
    fireEvent.click(review2MoreInfoButton);

    expect(mockUseSetSelectedMovieReview).toHaveBeenCalled();
  });
});
