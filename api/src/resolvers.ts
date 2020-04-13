import { IResolvers } from "apollo-server";
import { ApolloContext } from "./config";

const resolvers: IResolvers<any, ApolloContext> = {
  Query: {
    movies: (_, __, { services }) => services.movies.getAllMovies(),
    movie: (_, { input }, { services }) =>
      services.movies.getMovieDetails(input.id),
    movieReviews: (_, { input }, { services }) =>
      services.movies.getMovieReviews(input.id),
  },
};

export { resolvers };
