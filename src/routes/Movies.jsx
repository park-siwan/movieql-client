import { gql, useApolloClient, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  console.log('data:', data);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{'Could not fetch :('}</h1>;
  }
  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie) => (
        <ul>
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        </ul>
      ))}
      <h1>Tweets</h1>
      {data.allTweets.map((tweet) => (
        <ul>
          <li key={tweet.id}>
            {tweet.text}/by {tweet.author.fullName}
          </li>
        </ul>
      ))}
    </ul>
  );
};

export default Movies;
