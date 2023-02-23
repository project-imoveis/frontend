import { loginProps, registerProps } from "../models/auth_model";
import api from "../providers/api";

const login = (data: loginProps) => api.post("/user/login", data);
const register = (data: registerProps) => api.post("/user/register", data);

export const AuthService = {
  login,
  register,
};
