import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { type ReactNode } from "react";


export default function ProtectedRoute({ children }: {children: ReactNode}) {
  
  const { isAuthenticated, loading} = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{from: location}} />
  }
    // if (!user) {
    //   return <Navigate to="/login" replace />;
    // }

  return children;
}
