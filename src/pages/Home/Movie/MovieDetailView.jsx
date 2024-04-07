/* eslint-disable react/prop-types */
import moment from "moment";
import { useMemo } from "react";

export default function MovieDetailView({ moviesDataObject }) {
  const { imageUrl, title, director, budget, rating, language, movieType, preview, releaseDate, endDate } =
    moviesDataObject;
  const MovieDetailViewBlock = useMemo(() => {
    return (
      <div>
        <img src={imageUrl} style={{ height: "30vh", width: "30v", borderRadius: "10px" }} />
        <h2>Title: {title ? title : "-"}</h2>
        <p>Director: {director ? director : "-"}</p>
        <p>Budget: {budget ? budget : "-"}</p>
        <p>Rating: {rating ? rating : "-"}</p>
        <p>Language: {language ? language : "-"}</p>
        <p>Movie Type: {movieType ? movieType : "-"}</p>
        <p>Preview: {preview ? preview : "-"}</p>
        <p>Release Date: {releaseDate ? moment(new Date(releaseDate)).format("DD/MM/YYYY hh:mm:ss") : "-"}</p>
        <p>End Date: {endDate ? moment(new Date(endDate)).format("DD/MM/YYYY hh:mm:ss") : "-"}</p>
      </div>
    );
  }, [imageUrl, title, director, budget, rating, language, movieType, preview, releaseDate, endDate]);
  return <>{MovieDetailViewBlock}</>;
}
