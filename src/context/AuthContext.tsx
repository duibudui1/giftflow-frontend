/* eslint-disable react-refresh/only-export-components */


import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function login(email: string, password: string) {
    // TODO: заменить на реальный запрос к backend
    // временный фейковый login для разработки UI:
    const fakeResponse = {
      token: "fake-jwt-token",
      user: { id: "1", email },
    };

    // здесь потом будет await authService.login(email, password);
    setToken(fakeResponse.token);
    setUser(fakeResponse.user);
    localStorage.setItem("token", fakeResponse.token);
    localStorage.setItem("user", JSON.stringify(fakeResponse.user));
  }

  async function register(email: string, password: string) {
    // TODO: реальный запрос на backend
    // пока просто вызываем login сразу
    await login(email, password);
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
