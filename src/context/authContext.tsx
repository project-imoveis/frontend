import router from "next/router";
import React, { createContext, useCallback, useEffect } from "react";
import { login, register, logout, getData } from "../@core/controllers/auth_controller";
import { AuthContextType, AuthProviderProps } from "../@core/models/auth_model";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{ getData, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
