import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import DashBoardView from "./DashBoardView";
import moment from "moment";

const DashBoardContainer = () => {
  const { addMovieState } = useSelector((state) => state.AddMovieReducer);
  const navigate = useNavigate();

  const runningMoviesEvent = useMemo(() => {
    let upcomingMovies = addMovieState?.filter((movie) => {
      return (
        movie?.releaseDate && moment(new Date(movie.releaseDate)).isAfter()
      );
    });

    let completedMovies = addMovieState?.filter((movie) => {
      return movie?.endDate && moment(new Date(movie.endDate)).isBefore();
    });

    let currentMovies = addMovieState?.filter((movie) => {
      return (
        movie?.releaseDate &&
        movie?.endDate &&
        moment(new Date(movie.releaseDate)).isSameOrBefore() &&
        moment(new Date(movie.endDate)).isSameOrAfter()
      );
    });

    return { upcomingMovies, completedMovies, currentMovies };
  }, [addMovieState]);

  const {
    upcomingMovies = [],
    completedMovies = [],
    currentMovies = [],
  } = runningMoviesEvent;

  return (
    <DashBoardView
      {...{ upcomingMovies, completedMovies, currentMovies, navigate }}
    />
  );
};

export default DashBoardContainer;
