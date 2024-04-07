/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Card } from "antd";
import { useCallback, useMemo } from "react";

const DashBoardView = ({ upcomingMovies, completedMovies, currentMovies, navigate }) => {
  /*  return (
    <>
      <h1 style={{ display: "flex", textAlign: "center" }}>Current Movie</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentMovies.map((movie) => (
          <Card
            key={movie.id}
            style={{ width: 300, margin: "16px", color: "black" }}
            onClick={() => navigate(`/dashboard/view/${movie.id}`)}
          >
            <img src={movie?.imageUrl} style={{ width: "250px", height: "200px", borderRadius: "5px" }} />
            <h2>{movie.title}</h2>
          </Card>
        ))}
      </div>

      <h1 style={{ display: "flex", textAlign: "center" }}>Completed Movie</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {completedMovies.map((movie) => (
          <Card
            key={movie.id}
            style={{ width: 300, margin: "16px", color: "black" }}
            onClick={() => navigate(`/dashboard/view/${movie.id}`)}
          >
            <img src={movie?.imageUrl} style={{ width: "250px", height: "200px", borderRadius: "5px" }} />
            <h2>{movie.title}</h2>
          </Card>
        ))}
      </div>

      <h1 style={{ display: "flex", textAlign: "center" }}>Upcoming Movie</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {upcomingMovies.map((movie) => (
          <Card
            key={movie.id}
            style={{ width: 300, margin: "16px", color: "black" }}
            onClick={() => navigate(`/dashboard/view/${movie.id}`)}
          >
            <img src={movie?.imageUrl} style={{ width: "250px", height: "200px", borderRadius: "5px" }} />
            <h2>{movie.title}</h2>
          </Card>
        ))}
      </div>
    </>
  );
}; */
  const moviesEventForView = useCallback(
    (title, moviesData) => {
      return (
        <>
          <h1 style={{ display: "flex", textAlign: "center" }}>{title} Movie</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {moviesData?.map((movie) => (
              <Card
                key={movie.id}
                style={{ width: 300, margin: "16px", color: "black" }}
                onClick={() => navigate(`/dashboard/view/${movie.id}`)}
              >
                <img src={movie?.imageUrl} style={{ width: "250px", height: "200px", borderRadius: "5px" }} />
                <h2>{movie.title}</h2>
              </Card>
            ))}
          </div>
        </>
      );
    },
    [navigate]
  );

  const renderRow = useMemo(() => {
    return (
      <>
        {moviesEventForView("Current", currentMovies)}
        {moviesEventForView("Completed", completedMovies)}
        {moviesEventForView("Upcoming", upcomingMovies)}
      </>
    );
  }, [moviesEventForView, currentMovies, completedMovies, upcomingMovies]);

  return <>{renderRow}</>;
};

export default DashBoardView;
