import React, { useEffect } from "react";
import { useSelectedMovieReview } from "../../../hooks";
import { useNavigate } from "react-router";

const DetailsPage: React.FC = (): React.ReactElement => {
  const selectedReview = useSelectedMovieReview();
  const navigate = useNavigate();

  // Check if there is not a selected review - if not, navigate to the landing page
  useEffect(() => {
    if (selectedReview?.headline === "") {
      console.error("No selected review found");
      navigate("/");
    }
  }, [selectedReview]);

  return (
    <div>
      <header>
        <h2>Review Details</h2>
      </header>
      <div className="review-details">
        <h3>{selectedReview?.headline}</h3>
        <p>{selectedReview?.publication_date}</p>
        <p>{selectedReview?.byline}</p>
        <p>{selectedReview?.abstract}</p>
        <a href={selectedReview?.url}>Read Full Review on NYT</a>
      </div>
    </div>
  );
};

export default DetailsPage;
