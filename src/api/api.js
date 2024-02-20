export function getMovies(search = "matrix", type = "") {
  const params = new URLSearchParams();
  search && params.append("s", search ? search : "matrix");
  type && params.append("type", type === "all" ? "" : type);
  return fetch(
    `https://www.omdbapi.com/?apikey=${
      process.env.REACT_APP_API_KEY
    }&${params.toString()}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error", err);
    });
}
