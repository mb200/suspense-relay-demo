// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Suspense, SuspenseList } from "react";
import { useParams } from "react-router-dom";
import { MoviePageDetails } from "./MoviePageDetails";
import { MoviePageReviews } from "./MoviePageReviews";
import { Spinner } from "../components/Spinner";

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <div className="movie-page">
      <Suspense fallback={<Spinner isBig={true} />}>
        <MoviePageDetails movieId={movieId} />
        <MoviePageReviews movieId={movieId} />
      </Suspense>
    </div>
  );
};

export { MoviePage };
