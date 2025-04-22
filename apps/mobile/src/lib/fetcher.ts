import { API_URL } from "@/constants/api-url";
import { useAuthStore } from "../stores/auth-store";

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const token = useAuthStore.getState().token;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    // Handle 401 Unauthorized errors (token expired)
    if (response.status === 401) {
      // You could implement token refresh logic here
      // For now, we'll just throw an error
      throw new Error("Unauthorized");
    }

    // For other errors, throw with status
    const error = new Error("An error occurred while fetching the data.");
    error.cause = {
      info: await response.json(),
      status: response.status,
    };

    throw error;
  }

  return response.json();
};
