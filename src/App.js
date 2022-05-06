import React from "react";
import Home from "./routes/Home";
import "./App.css";

<<<<<<< HEAD
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies: movies.data.data.movies, isLoading: false });
    //console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
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
=======
function App() {
  return <Home />;
>>>>>>> hotfix
}

export default App;
