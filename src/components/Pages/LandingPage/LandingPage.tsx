import React from "react";
import {
  useNYTMovieReviews,
  useSetNYTMovieReviews,
  useSetSelectedMovieReview,
} from "../../../hooks";
import getMovieReviews from "../../../functions/getMovieReviews";
import { useNavigate } from "react-router";
import "./styles";

const LandingPage: React.FC = (): React.ReactElement => {
  const movieReviews = useNYTMovieReviews();
  const setNYTMovieReviews = useSetNYTMovieReviews();
  const setSelectedMovieReview = useSetSelectedMovieReview();
  const navigate = useNavigate();

  const handleClick = async (): Promise<void> => {
    getMovieReviews(setNYTMovieReviews);
  };

  return (
    <div className="landing-page-container">
      <header>
        <h1>NYT Movie Reviews</h1>
        <button onClick={handleClick}>Retrieve NYT Movie Reviews!</button>
      </header>
      {movieReviews && (
        <main>
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
        </main>
      )}
    </div>
  );
};

export default LandingPage;
