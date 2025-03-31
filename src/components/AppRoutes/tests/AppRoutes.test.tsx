import { render, screen } from "@testing-library/react";
import React from "react";
import AppRoutes from "../AppRoutes";
import { RecoilRoot } from "recoil";
import { IMovieReview } from "../../../types";
import { selectedMovieReviewState } from "../../../atoms";

jest.mock("../../Pages/LandingPage", () => () => <div>NYT Movie Reviews</div>);
jest.mock("../../Pages/DetailsPage", () => () => <div>Review Details</div>);

const mockSelectedReview: IMovieReview = {
  headline: "Mock Headline",
  publication_date: "2025-01-01",
  abstract: "Mock Abstract",
  url: "https://example.com",
  byline: "Mock Byline",
  section: "Movies",
};

describe("AppRoutes Component", () => {
  it("should display the LandingPage when path is '/' ", () => {
    render(<AppRoutes />);
    const title = screen.getByText("NYT Movie Reviews");
    expect(title).toBeInTheDocument();
  });

  it("should display the DetailsPage when path is '/details' ", () => {
    window.history.pushState({}, "Details Page", "/details");

    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(selectedMovieReviewState, mockSelectedReview);
        }}
      >
        <AppRoutes />
      </RecoilRoot>
    );

    const title = screen.getByText("Review Details");
    expect(title).toBeInTheDocument();
  });
});
