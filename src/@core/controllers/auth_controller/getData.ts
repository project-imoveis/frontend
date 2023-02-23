import jwtDecode from "jwt-decode";
import { parseCookies } from "nookies";
import { IUser } from "../../models/user_model";
type tokenType = {
  user: IUser;
  iat: number;
};

export const getData = () => {
  const { token } = parseCookies();
  const decodedToken: tokenType = jwtDecode(token);
  const { userToken }: any = decodedToken;
  const user: IUser = userToken;
  return { token, user };
};
