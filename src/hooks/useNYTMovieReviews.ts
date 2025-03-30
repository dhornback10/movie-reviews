import { useRecoilValue } from "recoil";

import nytResponseState from "../atoms/nytMovieReviewsState";
import IMovieReview from "../types/IMovieReview";

const useNYTMovieReviews = (): IMovieReview[] | null =>
  useRecoilValue(nytResponseState);

export default useNYTMovieReviews;
