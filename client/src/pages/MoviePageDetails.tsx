import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Popcorn } from "../components/Popcorn";
import { Tomato } from "../components/Tomato";
import { MoviePageDetailsQuery } from "./__generated__/MoviePageDetailsQuery.graphql";

const MoviePageDetails: React.FC<Props> = ({ movieId }) => {
  const { movie } = useLazyLoadQuery<MoviePageDetailsQuery>(
    graphql`
      query MoviePageDetailsQuery($id: ID!) {
        movie(input: { id: $id }) {
          name
          posterSrc
          tomatoMeter
          audienceScore
          criticsConsensus
        }
      }
    `,
    { id: movieId }
  );

  return (
    <div className="movie-details">
      <div className="poster">
        <img
          style={{ height: 350 }}
          src={movie.posterSrc}
          alt={`movie-poster-${movie.name}`}
        />
      </div>
      <div className="summary">
        <h1>{movie.name}</h1>
        <hr className="separator" />
        <div className="scores">
          <div className="block">
            <h5>Tomatometer</h5>
            <Tomato score={movie.tomatoMeter} />
            <span className="score">{movie.tomatoMeter}%</span>
          </div>
          <div className="block">
            <h5>Audience Score</h5>
            <Popcorn />
            <span className="score">{movie.audienceScore}%</span>
          </div>
        </div>
        <div className="consensus">
          <h5>Critics Consensus</h5>
          {movie.criticsConsensus}
        </div>
      </div>
    </div>
  );
};

interface Props {
  movieId: string;
}

export { MoviePageDetails };
