import { SetterOrUpdater, useSetRecoilState } from "recoil";

import IMovieReview from "../types/IMovieReview";
import { selectedMovieReviewState } from "../atoms";

const useSetSelectedMovieReview = (): SetterOrUpdater<IMovieReview> =>
  useSetRecoilState(selectedMovieReviewState);

export default useSetSelectedMovieReview;
