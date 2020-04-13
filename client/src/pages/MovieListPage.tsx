import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Link } from "react-router-dom";
import { Popcorn } from "../components/Popcorn";
import { Tomato } from "../components/Tomato";
import { MovieListPageQuery } from "./__generated__/MovieListPageQuery.graphql";

const MovieListPage: React.FC = () => {
  const { movies } = useLazyLoadQuery<MovieListPageQuery>(
    graphql`
      query MovieListPageQuery {
        movies {
          id
          name
          tomatoMeter
        }
      }
    `,
    {}
  );

  return (
    <div className="movie-list-page">
      <h1>
        Top Movies of 2019 <Popcorn />
      </h1>
      <div className="movie-list">
        {movies.map((m) => (
          <Link key={m.id} to={`/movies/${m.id}`} className="movie-item">
            <Tomato score={m.tomatoMeter} />
            <div className="content">
              <h3>{m.name}</h3>
              <span>{m.tomatoMeter}%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { MovieListPage };
