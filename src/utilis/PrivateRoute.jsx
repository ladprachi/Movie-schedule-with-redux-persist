
/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { ROUTE_CONFIG } from "../constant/Constant";
import { getSessionData } from "../Helper/authHelper";
import Sidebar from "../pages/Home/Dashboard/Sidebar";
import Header from "../pages/Home/Dashboard/Header";

const PrivateRoute = ({ children }) => {

  return getSessionData() ?
    <>
      <div className="row">
        <div className='col-12 p-4'>
          <Header />
        </div>
        <div className='col-12 d-flex'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            {children}
          </div>
        </div>
      </div>
    </> : <Navigate to={ROUTE_CONFIG?.LOGIN} />;
};

export default PrivateRoute;