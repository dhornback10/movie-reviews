import { atom } from "recoil";
import IMovieReview from "../types/IMovieReview";

const initialState: IMovieReview = {
  headline: "",
  publication_date: "",
  abstract: "",
  url: "",
  byline: "",
  section: "",
};

const selectedMovieReviewState = atom({
  key: "selectedMovieReviewState",
  default: initialState,
});

export default selectedMovieReviewState;
