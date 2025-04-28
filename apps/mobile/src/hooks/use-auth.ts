import { fetcher } from "@/lib/fetcher";
import { useAuthStore } from "@/stores/auth-store";
import { router } from "expo-router";

export const useAuth = () => {
  const { isAuthenticated, isLoading, setAccessToken, removeAccessToken } =
    useAuthStore((state) => state);

  const registerAccount = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const accessToken = response["accessToken"];

      await setAccessToken(accessToken);

      return response;
    } catch (error) {
      // TODO(Raph): Toasts for error notifications
      console.error("Error registering account", error);
    }
  };

  const loginUser = async (values: { email: string; password: string }) => {
    try {
      const response = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const accessToken = response["accessToken"];

      await setAccessToken(accessToken);

      return response;
    } catch (error) {
      // TODO(Raph): Toasts for error notifications
      console.error("Error registering account", error);
    }
  };

  const logout = async () => {
    try {
      await removeAccessToken();

      router.push("..");
    } catch (error) {
      console.error("Logout failed");
      throw error;
    }
  };

  return { registerAccount, loginUser, logout, isAuthenticated, isLoading };
};
