import { loginProps, registerProps } from "../models/auth_model";
import api from "../providers/api";

const login = (data: loginProps) => api.post("/users/login", data);
const register = (data: registerProps) => api.post("/users/register", data);

export const AuthService = {
  login,
  register,
};
