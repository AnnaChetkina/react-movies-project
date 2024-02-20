export function getMovies(search = "matrix", type = "") {
  const params = new URLSearchParams();
  search && params.append("s", search ? search : "matrix");
  type && params.append("type", type === "all" ? "" : type);
  console.log("fetch data")
  return fetch(
    `http://www.omdbapi.com/?apikey=${
      process.env.REACT_APP_API_KEY
    }&${params.toString()}`
  ).then((res) => res.json());
}
