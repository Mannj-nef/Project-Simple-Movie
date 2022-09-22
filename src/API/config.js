import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

// const API_MOVIE = process.env.REACT_APP_TMDB;
// const API_KEY = process.env.REACT_APP_KEY;

const API_MOVIE = "https://api.themoviedb.org/3";
const API_KEY = "a4bf361f5cdff62a8cda329a39cc0303";

export const tmdb = {
  getMovie: (type, page = 1) =>
    `${API_MOVIE}/movie/${type}?api_key=${API_KEY}&page=${page}`,
  getDetailMovie: (id) => `${API_MOVIE}/movie/${id}?api_key=${API_KEY}`,
  getMeta: (type, id) => `${API_MOVIE}/movie/${id}/${type}?api_key=${API_KEY}`,
  searchMovie: (param, page = 1) =>
    `${API_MOVIE}/search/movie?api_key=${API_KEY}&query=${param}&page=${page}`,

  img500: (url) => `http://image.tmdb.org/t/p/w500/${url}`,
  imgOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
// export const tmdb = {
//   getMovie: (type, page = 1) =>
//     `${API_MOVIE}/movie/${type}?api_key=${API_KEY}&page=${page}`,
//   getDetailMovie: (id) => `${API_MOVIE}/movie/${id}?api_key=${API_KEY}`,
//   getMeta: (type, id) => `${API_MOVIE}/movie/${id}/${type}?api_key=${API_KEY}`,
//   searchMovie: (param, page = 1) =>
//     `${API_MOVIE}/search/movie?api_key=${API_KEY}&query=${param}&page=${page}`,

//   img500: (url) => `http://image.tmdb.org/t/p/w500/${url}`,
//   imgOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
// };
