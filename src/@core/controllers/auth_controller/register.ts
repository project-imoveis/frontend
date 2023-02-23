import { registerProps } from "../../models/auth_model";
import { AuthService } from "../../services/auth_services";

export const register = async (data: registerProps) => {
  const { token, user }: any = AuthService.register(data);
};
