import { gql, useApolloClient } from '@apollo/client';
import React, { useEffect, useState } from 'react';

// const ALL_MOVIES = gql`
//   query getMovies {
//     allMovies {
//       title
//       id
//     }
//   }
// `;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
              id
            }
          }
        `,
      })
      .then((results) => setMovies(results.data.allMovies));
  }, [client]);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Movies;
