export function getMovies(search = "matrix", type = "") {
    const params = new URLSearchParams();
    params.append("s", search);
    type && params.append("type", type === "all" ? "" : type);
    console.log("type in req", type)
    // params.append("page", "2");
    return fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&${params.toString()}`)
      .then((res) => res.json())
}