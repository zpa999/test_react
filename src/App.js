import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies.data.data.movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    console.log("tseting!");
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"} </div>;
  }
}

export default App;
