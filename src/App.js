import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );

    this.setState({ movies: movies.data.data.movies, isLoading: false });
    console.log(typeof this.state.movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    //console.log(this.state.isLoading);
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              //console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
