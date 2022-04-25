import React from "react";
import axios from "axios";
import PropType from "prop-types";

class Movie_App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? "Loading..." : "We are ready"} </div>;
  }
}

Movie_App.propType = { 
  id: PropType.number.isRequired
  year: PropType.number.isRequired
  title:PropType.string.
}

export default Movie_App;
