import type { ReactNode } from "react";

import { createContext, use, useMemo, useState } from "react";

import type { User } from "./types/auth";

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: User | null;
  setUser: (u: User | null) => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      setUser,
      setIsAuthenticated,
    }),
    [user, setUser, isAuthenticated]
  );

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth() {
  const context = use(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
