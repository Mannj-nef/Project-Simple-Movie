import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const API_MOVIE = process.env.REACT_APP_TMDB;
const API_KEY = process.env.REACT_APP_API_KEY;

export const tmdb = {
  getMovie: (type) => `${API_MOVIE}/movie/${type}?api_key=${API_KEY}`,
  img500: (url) => `http://image.tmdb.org/t/p/w500/${url}`,
  imgOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
