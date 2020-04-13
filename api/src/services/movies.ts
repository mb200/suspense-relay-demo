import { IMovie, MOVIES, REVIEWS, MovieID, IMovieReview } from "../db";
import { TIMEOUTS } from "../config";
import { delay } from "../utils/delay";

const MoviesService = {
  getAllMovies(): Promise<IMovie[]> {
    return Promise.resolve(
      delay(() => [...MOVIES.values()], TIMEOUTS.MOVIE_LIST)
    );
  },
  getMovieDetails(id: string): Promise<IMovie> {
    const match = MOVIES.get(id as MovieID);

    if (!match) {
      throw new Error(`No movie found with id: ${id}.`);
    }

    return Promise.resolve(delay(() => match, TIMEOUTS.MOVIE_DETAILS));
  },
  getMovieReviews(id: string): Promise<IMovieReview[]> {
    const match = REVIEWS.get(id as MovieID);

    if (!match) {
      throw new Error(`No movie found with id: ${id}.`);
    }

    return Promise.resolve(delay(() => match, TIMEOUTS.MOVIE_REVIEWS));
  },
};

export { MoviesService };
