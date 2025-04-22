import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import { SECURE_STORAGE } from "@/utils/secure-storage";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  setAccessToken: (token: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  removeAccessToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isLoading: true,
      token: null,

      setAccessToken: async (token: string) => {
        await SecureStore.setItemAsync("access_token", token);
        set({ token, isAuthenticated: true });
      },

      checkAuth: async () => {
        try {
          const storedToken = await SecureStore.getItemAsync("access_token");
          if (storedToken) {
            set({ token: storedToken, isAuthenticated: true });
          }
        } catch (error) {
          console.error("Error checking auth status:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      removeAccessToken: async () => {
        await SecureStore.deleteItemAsync("access_token");
        set({ token: "", isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => SECURE_STORAGE),
      partialize: (state) => ({ token: state.token }),
    }
  )
);
