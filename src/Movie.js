import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie() {
  console.log("tset!");
  return (
    <div class="movie">
      <img src="https://yts.mx/assets/images/movies/crush_2022/small-cover.jpg" />
      <h3 class="movie__title">Crush</h3>
      <h5 class="movie__year">2006</h5>
    </div>
  );
}

export default Movie;
