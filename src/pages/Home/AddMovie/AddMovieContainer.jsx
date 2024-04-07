/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { ADD_MOVIE_FORM, ROUTE_CONFIG } from "../../../constant/Constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieData,
  updateUser,
} from "../../../store/slices/AddMovieSlice";
import { useNavigate, useParams } from "react-router-dom";
import AddMovieView from "./AddMovieView";

const AddMovieContainer = () => {

  return (
    <AddMovieView/>
  );
};

export default AddMovieContainer;
