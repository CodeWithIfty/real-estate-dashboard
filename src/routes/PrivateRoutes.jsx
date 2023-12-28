import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <span className="loading loading-ring loading-md scale-150"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

export default PrivateRoutes;
