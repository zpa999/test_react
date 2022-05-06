import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating" //https://yts.mx/api/v2/list_movies.json?sort_by=rating?sort_by=rating
    );

    this.setState({ movies: movies.data.data.movies, isLoading: false });
    console.log(this.state.movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    //console.log(this.state.isLoading);
    const { isLoading, movies } = this.state;

    return (
      <section classname="container">
        {isLoading ? (
          <div classname="loader">
            <span classname="loader__text">Loading...</span>
          </div>
        ) : (
          <div classname="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
