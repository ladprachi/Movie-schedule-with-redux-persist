import { ROUTE_CONFIG } from "../constant/Constant";
import { Route, Routes } from "react-router-dom";
import AuthContainer from "../pages/Auth/AuthContainer";
import DashBoardContainer from "../pages/Home/Dashboard/DashBoardContainer";
import PrivateRoute from "../utilis/PrivateRoute";
import MovieContainer from "../pages/Home/Movie/MovieContainer";
import AddMovieContainer from "../pages/Home/AddMovie/AddMovieContainer";
import PublicRoute from "../utilis/PublicRoute";
import ContactUsContainer from "../pages/Home/ContactUs/ContactUsContainer";
import AboutUsContainer from "../pages/Home/AboutUs/AboutUsContainer";
import Movie_Id_View from "../pages/Home/Movie/Movie_Id_View";
import DashBoard_Id_View from "../pages/Home/Dashboard/DashBoard_Id_View";
import PolicyContainer from "../pages/User/Policy/PolicyContainer";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path={ROUTE_CONFIG?.LOGIN}
          element={
            <PublicRoute>
              <AuthContainer />
            </PublicRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.DASHBOARD}
          element={
            <PrivateRoute>
              <DashBoardContainer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.DASHBOARD_CARD_VIEW}
          element={
            <PrivateRoute>
              <DashBoard_Id_View />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.HOME}
          element={
            <PrivateRoute>
              <DashBoardContainer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.MOVIE}
          element={
            <PrivateRoute>
              <MovieContainer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.ADD_MOVIE}
          element={
            <PrivateRoute>
              <AddMovieContainer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.MOVIE_VIEW}
          element={
            <PrivateRoute>
              <Movie_Id_View />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.MOVIE_EDIT}
          element={
            <PrivateRoute>
              <AddMovieContainer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.CONTACT_US}
          element={
            <PrivateRoute>
              <ContactUsContainer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={ROUTE_CONFIG?.ABOUT_US}
          element={
            <PrivateRoute>
              <AboutUsContainer />
            </PrivateRoute>
          }
        />
        <Route exact path={ROUTE_CONFIG?.POLICY}
          element={
            <PrivateRoute>
              <PolicyContainer />
            </PrivateRoute>
          } />
      </Routes>
    </>
  );
};

export default AllRoute;
