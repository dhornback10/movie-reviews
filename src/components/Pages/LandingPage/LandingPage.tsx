import React from "react";
import {
  useNYTMovieReviews,
  useSetNYTMovieReviews,
  useSetSelectedMovieReview,
} from "../../../hooks";
import getMovieReviews from "../../../functions/getMovieReviews";
import { useNavigate } from "react-router";

const LandingPage: React.FC = (): React.ReactElement => {
  const movieReviews = useNYTMovieReviews();
  const setNYTMovieReviews = useSetNYTMovieReviews();
  const setSelectedMovieReview = useSetSelectedMovieReview();
  const navigate = useNavigate();

  const handleClick = async (): Promise<void> => {
    getMovieReviews(setNYTMovieReviews);
  };

  return (
    <div>
      <header>
        <h1>NYT Movie Reviews</h1>
      </header>
      <button onClick={handleClick}>Retrieve NYT Movie Reviews!</button>
      {movieReviews && (
        <ol type="I">
          {movieReviews.map((review) => (
            <li key={review.url} className="review">
              <p>{review.headline}</p>
              <button
                onClick={() => {
                  setSelectedMovieReview(review);
                  navigate("/details");
                }}
              >
                More Information
              </button>
            </li>
          ))}
        </ol>
      )}
      {/* {movieReviews &&
        movieReviews?.map((review) => (
          <div key={review.url} className="review">
            <h2>{review.headline}</h2>
          </div>
        ))} */}
    </div>
  );
};

export default LandingPage;
