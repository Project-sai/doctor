import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, token } = useAuth();
  
  console.log("User:", user); // Add this to check
  console.log("Token:", token); // Add this to check

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.type)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
