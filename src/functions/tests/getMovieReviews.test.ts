import getMovieReviews from "../getMovieReviews";

global.fetch = jest.fn();

const mockSetNYTMovieReviews = jest.fn();

describe("getMovieReviews function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch movie reviews successfully", async () => {
    const mockResponse = {
      results: [
        {
          display_title: "Mock Movie",
          byline: "Mock Byline",
          headline: "Mock Headline",
          summary_short: "Mock Summary",
          publication_date: "2025-01-01",
          link: { url: "https://example.com" },
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const reviews = await getMovieReviews(mockSetNYTMovieReviews);

    expect(fetch).toHaveBeenCalled();
    expect(reviews).toEqual(mockResponse);
  });

  it("should handle fetch error", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Fetch error"));

    await expect(getMovieReviews(mockSetNYTMovieReviews)).rejects.toEqual({
      message: "Failed to fetch movie reviews",
      status: "error",
    });
  });
});
