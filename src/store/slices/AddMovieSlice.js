import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  addMovieState: [],
  isAddUpdateMoviesSuccess:false
};

const AddMovie = createSlice({
  name: "AddMovieReducer",
  initialState: INITIAL_STATE,
  reducers: {
    addMovieData(state, action) {
      if(action?.payload && Object.keys(action.payload)?.length > 0){
        const newMovie = { ...action.payload, id: uuidv4() };
        state.addMovieState = [...state.addMovieState, {...newMovie}]
        state.isAddUpdateMoviesSuccess = true
      }
    },
    deleteMovieData(state, action) {
      state.addMovieState = state.addMovieState.filter(
        (movie) => movie.id !== action.payload
        );
      state.isAddUpdateMoviesSuccess = true
    },
    // editMovieData(state, action) {
    //   state.addMovieState = state.addMovieState.find((movie) => movie.id !== action.payload)
    // },
    updateUser(state,action){
      // state.addMovieState= state.addMovieState.find((movie) => movie.id !== action.payload)
      state.addMovieState= action.payload
      state.isAddUpdateMoviesSuccess = true
    },
    setIsAddUpdateMoviesSuccess(state,action){
      state.isAddUpdateMoviesSuccess = action.payload
    }
  },
});

export default AddMovie.reducer;
export const { addMovieData, deleteMovieData, editMovieData, updateUser, setIsAddUpdateMoviesSuccess } =
  AddMovie.actions;
