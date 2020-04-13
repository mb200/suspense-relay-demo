import fs from "fs";
import path from "path";
import { resolvers } from "../resolvers";
import { MoviesService } from "../services/movies";

const context = {
  services: {
    movies: MoviesService,
  },
};

export type ApolloContext = typeof context;

const typeDefs = fs
  .readFileSync(path.join(__dirname, "../../../schema.graphql"), "utf8")
  .toString();

const apolloConfig = {
  typeDefs,
  resolvers,
  context() {
    return context;
  },
};

const TIMEOUTS = {
  BASE: 200,
  MOVIE_LIST: 400,
  MOVIE_DETAILS: 200,
  MOVIE_REVIEWS: 1350,
  IMAGE_LOAD: 100,
} as const;

export { TIMEOUTS, apolloConfig };
