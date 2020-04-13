import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Tomato } from "../components/Tomato";
import { MoviePageReviewsQuery } from "./__generated__/MoviePageReviewsQuery.graphql";

const MoviePageReviews: React.FC<Props> = ({ movieId }) => {
  const { movieReviews: reviews } = useLazyLoadQuery<MoviePageReviewsQuery>(
    graphql`
      query MoviePageReviewsQuery($id: ID!) {
        movieReviews(input: { id: $id }) {
          author
          source
          blurb
          fresh
        }
      }
    `,
    { id: movieId }
  );

  return (
    <div className="movie-reviews">
      {reviews.map((review, idx) => (
        <div key={idx} className="movie-review">
          <Tomato score={review.fresh ? 100 : 0} />
          <div className="content">
            <p className="blurb">{review.blurb}</p>
            <span className="by-line">
              {review.author}, {review.source}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

interface Props {
  movieId: string;
}

export { MoviePageReviews };
