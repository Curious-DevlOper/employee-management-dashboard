import { createContext } from "react";

export type AuthContextType = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
