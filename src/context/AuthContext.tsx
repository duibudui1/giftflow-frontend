import { apiLogin, apiRegister, apiMe } from "../api/authApi";


import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";


type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
};


const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}


export function AuthProvider({ children }: {children: ReactNode}) {

  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function checkAuth() {
    try {
      await apiMe();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } 
  }

  useEffect(() => {
    checkAuth().finally(()=> setLoading(false));
  }, []);
  


  async function login(email: string, password: string) {

    setLoading(true);
    setError(null);

    try {
      await apiLogin(email, password);
      await checkAuth(); // спрашиваем /me
    } catch (err) {
      setError("Invalid email or password");
      throw err;
    } finally {
      setLoading(false);
    }
}

  async function register(data: RegisterData) {
  setLoading(true);
  setError(null);

  try {
    await apiRegister(data);
    await checkAuth();
  } catch (err) {
    setError("Registration failed");
    throw err;
  } finally {
    setLoading(false);
  }
}

  async function logout() {
    await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });

    setIsAuthenticated(false);
}

  return <AuthContext.Provider value={{login, register, logout, loading, error, isAuthenticated}}>{children}</AuthContext.Provider>;
}
