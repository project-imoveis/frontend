import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { AuthContextType } from "../@core/models/auth_model";

export default function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}
