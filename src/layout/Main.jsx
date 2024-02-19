import React from "react";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { getMovies } from "../api/api";

export default class Main extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  APIkey = process.env.REACT_APP_API_KEY;

  componentDidMount() {
    getMovies().then((data) =>
      this.setState({ isLoading: false, movies: data.Search })
    );
  }

  searchMovies = (searchStr, type) => {
    getMovies(searchStr, type).then((data) =>
      this.setState({ isLoading: false, movies: data.Search })
    );
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main className="container content">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Search handleSearch={this.searchMovies} />
            <MoviesList list={movies} />
          </>
        )}
      </main>
    );
  }
}

//todo del console.log, roll back to the working version, create repo, git commit
