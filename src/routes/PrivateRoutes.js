import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  return true ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
