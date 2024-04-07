/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import MovieView from "./MovieView";
import { deleteMovieData } from "../../../store/slices/AddMovieSlice";
import { useNavigate, useParams, } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const MovieContainer = () => {
  const { addMovieState } = useSelector((state) => state.AddMovieReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (record) => {
    navigate(`/movie/edit/${record}`)
  };

  const handleDelete = (id) => {
    dispatch(deleteMovieData(id));
  };

  return <MovieView {...{ addMovieState, handleEdit, handleDelete }} />;
};

export default MovieContainer;
