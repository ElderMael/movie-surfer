import React from 'react';
import Rating from './Rating';

const propTypes = {
  info: React.PropTypes.object.isRequired
};

const MovieCard = ({ info }) => {
  return (
    <div className="eight wide column">
      <a className="movie-link" href={`/movies/${info.id}`}>
        <div className="movie-card">
          <h1 className="ui header">{info.original_title}</h1>
          <Rating rating={info.vote_average} />
          <img alt={`${info.original_title} poster`} src={`https://image.tmdb.org/t/p/w342${info.poster_path}`}></img>
          <div>{info.overview}</div>
        </div>
      </a>
    </div>
  );
};

MovieCard.propTypes = propTypes;
export default MovieCard;
