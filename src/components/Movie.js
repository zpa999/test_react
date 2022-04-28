import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div classname="movie">
      <img src={poster} alt={title} title={title} />
      <div classname="movie__data">
        <h3 classname="movie__title">{title}</h3>
        <h5 classname="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>

        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="movie__genre">
                {genre}
              </li>
            );
          })}
        </ul>

        <p classname="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.prototypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
