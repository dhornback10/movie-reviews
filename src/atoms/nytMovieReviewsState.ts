import { atom } from "recoil";
import IMovieReview from "../types/IMovieReview";

const initialState: IMovieReview[] = [];

const nytMovieReviewsState = atom({
  key: "nytResponseState",
  default: initialState,
});

export default nytMovieReviewsState;
