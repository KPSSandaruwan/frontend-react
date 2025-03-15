import { useAuth } from "../../utils/authUtils";
import { Navigate } from "react-router-dom";


export default function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.isLogged) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}