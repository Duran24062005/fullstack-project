"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  type AuthenticatedUser,
  type RegisterResponse,
} from "@/lib/auth-api";

type AuthState = {
  accessToken: string | null;
  tokenType: string | null;
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
  hasHydrated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<RegisterResponse>;
  logout: () => Promise<void>;
  clearSession: () => void;
  hydrate: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      tokenType: null,
      user: null,
      isAuthenticated: false,
      hasHydrated: false,
      login: async (email, password) => {
        const response = await loginRequest(email, password);

        set({
          accessToken: response.access_token,
          tokenType: response.token_type,
          user: response.user,
          isAuthenticated: true,
        });
      },
      register: async (username, email, password) => {
        return registerRequest({ username, email, password });
      },
      logout: async () => {
        const token = get().accessToken;

        try {
          await logoutRequest(token);
        } finally {
          get().clearSession();
        }
      },
      clearSession: () => {
        set({
          accessToken: null,
          tokenType: null,
          user: null,
          isAuthenticated: false,
        });
      },
      hydrate: () => {
        set({ hasHydrated: true });
      },
    }),
    {
      name: "stockflow-auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
        tokenType: state.tokenType,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        state?.hydrate();
      },
    }
  )
);
