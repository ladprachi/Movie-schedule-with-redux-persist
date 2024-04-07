import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailView from "../Movie/MovieDetailView";

const DashBoard_Id_View = () => {
  const { moviesId } = useParams();
  const { addMovieState } = useSelector((state) => state.AddMovieReducer);

  const moviesDataObject = useMemo(() => {
    const moviesObj = addMovieState?.find((data) => data?.id === moviesId) || {};
    return moviesObj;
  }, [addMovieState, moviesId]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Details</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {Object.keys(moviesDataObject)?.length > 0 ? (
          <MovieDetailView moviesDataObject={moviesDataObject} />
        ) : (
          <p> Movie not found!</p>
        )}
      </div>
    </>
  );
};

export default DashBoard_Id_View;
