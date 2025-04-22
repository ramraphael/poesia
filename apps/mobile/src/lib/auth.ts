import { fetcher } from "./fetcher";

export const login = async (email: string, password: string) => {
  return fetcher("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const register = async (
  email: string,
  password: string,
  name?: string
) => {
  return fetcher("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

// TODO(raph): Implement logout functionality
