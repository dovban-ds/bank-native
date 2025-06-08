import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ApiResponse,
  AuthStore,
  BasicAuthCredentials,
  SignupData,
  Transaction,
  User,
} from "models/authModels";
import { authAPI } from "config";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      basicAuthCredentials: null,
      isAuthenticated: false,
      isLoading: false,
      isTourCarouselSkipped: false,
      error: null,

      setTourCarouselSkipped: (skipped: boolean) =>
        set({ isTourCarouselSkipped: skipped }),

      signup: async (
        userData: SignupData
      ): Promise<
        ApiResponse<{ basicAuthCredentials: BasicAuthCredentials }>
      > => {
        set({ isLoading: true, error: null });

        try {
          const result = await authAPI.signup(userData);

          if (result.success) {
            const { basicAuthCredentials } = result.data;

            set({
              basicAuthCredentials,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            return { success: true, data: result.data };
          } else {
            set({
              isLoading: false,
              error: result.error,
            });

            return { success: false, error: result.error };
          }
        } catch (error: any) {
          const errorMessage = error.message || "Signup failed";
          set({
            isLoading: false,
            error: errorMessage,
          });

          return { success: false, error: errorMessage };
        }
      },

      getAccountDetails: async (): Promise<ApiResponse<User>> => {
        const { basicAuthCredentials } = get();

        if (!basicAuthCredentials) {
          const errorMsg = "No authentication credentials";
          set({ error: errorMsg });
          return { success: false, error: errorMsg };
        }

        set({ isLoading: true, error: null });

        try {
          const result = await authAPI.getAccount(basicAuthCredentials);

          if (result.success) {
            set({
              user: result.data,
              isLoading: false,
            });

            return { success: true, data: result.data };
          } else {
            set({
              isLoading: false,
              error: result.error,
            });

            return { success: false, error: result.error };
          }
        } catch (error: any) {
          const errorMessage = error.message || "Failed to get account details";
          set({
            isLoading: false,
            error: errorMessage,
          });

          return { success: false, error: errorMessage };
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isTourCarouselSkipped: state.isTourCarouselSkipped,
        basicAuthCredentials: state.basicAuthCredentials,
      }),
    }
  )
);

// todo: consider moving selectors to separate folder
export const useUser = (): User | null => useAuthStore((state) => state.user);
export const useIsAuthenticated = (): boolean =>
  useAuthStore((state) => state.isAuthenticated);
export const useAuthLoading = (): boolean =>
  useAuthStore((state) => state.isLoading);
export const useAuthError = (): string | null =>
  useAuthStore((state) => state.error);
export const useBasicAuthCredentials = (): BasicAuthCredentials | null =>
  useAuthStore((state) => state.basicAuthCredentials);
export const useGetAccDetails = () =>
  useAuthStore((state) => state.getAccountDetails);
export const useIsTourCarouselSkipped = (): boolean =>
  useAuthStore((state) => state.isTourCarouselSkipped);

export const useUserBalance = (): number =>
  useAuthStore((state) => state.user?.availableBalance ?? 0);
export const useUserTransactions = (): Transaction[] =>
  useAuthStore((state) => state.user?.transactions ?? []);
export const useUserCurrency = (): string =>
  useAuthStore((state) => state.user?.currency ?? "");
export const useUserAccountType = (): string =>
  useAuthStore((state) => state.user?.accountType ?? "");
