import { allMovies } from './mock/movie.js';

const MOVIES_COUNT_PER_STEP = 10;
const MAX_SHORT_DESCRIPTION_LENGTH = 139;

const topMoviesList = allMovies
  .filter((movie) => movie.filmInfo.totalRating > 0)
  .sort((a, b) => a.filmInfo.totalRating < b.filmInfo.totalRating);

const mostCommentedMoviesList = allMovies
  .filter((movie) => movie.comments.size > 0)
  .sort((a, b) => a.comments.size < b.comments.size);

export {
  MOVIES_COUNT_PER_STEP,
  MAX_SHORT_DESCRIPTION_LENGTH,
  topMoviesList,
  mostCommentedMoviesList
};
