import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a1c58729dd9d07a228419b3d2b553cbb';

export const fetchPopularMovies = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieActors = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
export const fetchMovieByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};
