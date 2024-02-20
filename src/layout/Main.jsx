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
    getMovies()
      .then((data) => this.setState({ isLoading: false, movies: data.Search }))
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log("fetch data error ", err);
      });
  }

  searchMovies = (searchStr, type) => {
    this.setState({ isLoading: true });
    getMovies(searchStr, type)
      .then((data) => {
        if (data.Response === "True") {
          this.setState({
            isLoading: false,
            movies: data.Search,
          });
        } else {
          throw new Error(data.Error);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
      });
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main className="container content">
        <Search handleSearch={this.searchMovies} />
        {isLoading ? <Preloader /> : <MoviesList list={movies} />}
      </main>
    );
  }
}
