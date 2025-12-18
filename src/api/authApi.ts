const API_URL = import.meta.env.VITE_API_URL;

type RegisterData = {
  name: string;
  email: string;
  password: string;
};
export async function apiLogin(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data = await res.json();
  localStorage.setItem("accessToken", data.accessToken);
}

export async function apiRegister(data: RegisterData) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Register failed");
  }
}

export async function apiMe() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No token");
  }

  const res = await fetch(`${API_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Not authenticated");
  }

  return res.json();
}