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
    //console.log(movies.data.data.movies);
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    //console.log(this.state.isLoading);
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map()} </div>;
  }
}

export default App;
