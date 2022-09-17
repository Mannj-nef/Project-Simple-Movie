import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const API_MOVIE = process.env.REACT_APP_TMDB;
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "a4bf361f5cdff62a8cda329a39cc0303";

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=
export const tmdb = {
  getMovie: (type) => `${API_MOVIE}/movie/${type}?api_key=${API_KEY}`,
  getDetailMovie: (id) => `${API_MOVIE}/movie/${id}?api_key=${API_KEY}`,
  getMeta: (type, id) => `${API_MOVIE}/movie/${id}/${type}?api_key=${API_KEY}`,
  img500: (url) => `http://image.tmdb.org/t/p/w500/${url}`,
  imgOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
