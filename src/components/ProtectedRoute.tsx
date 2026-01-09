


// import { Navigate } from "react-router-dom";
// import { ReactNode } from "react";

// type ProtectedRouteProps = {
//   children: ReactNode;
// };

// const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//   const isAuthenticated = true; // replace later

//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute =({ children }: ProtectedRouteProps) => {
  const isAuth = true; // whatever your auth check is

  if (!isAuth) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;

