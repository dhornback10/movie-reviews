import { INYTResponse } from "../types";
import { useSetNYTMovieReviews } from "../hooks";
import IMovieReview from "../types/IMovieReview";
import { SetterOrUpdater } from "recoil";

const getMovieReviews = async (
  setNYTMovieReviews: SetterOrUpdater<IMovieReview[]>
): Promise<INYTResponse> => {
  const apiKey = "";

  const fullUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q="movie review"&api-key=${apiKey}&sort=newest&filter=review&limit=20&page=0&fq=section_name:("Movies")`;

  try {
    const response = await fetch(fullUrl);
    const data = await response.json();

    if (data.response && data.response.docs) {
      const movieReviews: IMovieReview[] = data.response.docs.map(
        (doc: any) => ({
          headline: doc.headline.main,
          publication_date: doc.pub_date,
          abstract: doc.abstract,
          url: doc.web_url,
          byline: doc.byline ? doc.byline.original : "Unknown",
          section: doc.section_name,
        })
      );

      setNYTMovieReviews(movieReviews);
    }

    return data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw {
      status: "error",
      message: "Failed to fetch movie reviews",
    };
  }
};

export default getMovieReviews;
