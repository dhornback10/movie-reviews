import { useRecoilValue } from "recoil";

import IMovieReview from "../types/IMovieReview";
import { selectedMovieReviewState } from "../atoms";

const useSelectedMovieReview = (): IMovieReview | null =>
  useRecoilValue(selectedMovieReviewState);

export default useSelectedMovieReview;
