import { SetterOrUpdater, useSetRecoilState } from "recoil";

import nytMovieReviewsState from "../atoms/nytMovieReviewsState";
import IMovieReview from "../types/IMovieReview";

const useSetNYTMovieReviews = (): SetterOrUpdater<IMovieReview[]> =>
  useSetRecoilState(nytMovieReviewsState);

export default useSetNYTMovieReviews;
