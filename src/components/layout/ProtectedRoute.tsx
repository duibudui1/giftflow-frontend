import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { ReactElement } from "react";

type ProtectedRouteProps = {
  children: ReactElement;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
