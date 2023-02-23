import { parseCookies } from "nookies";
import jwtDecode from "jwt-decode";

export function withAuth(func: any) {
  return async (ctx: any) => {
    const { token } = parseCookies(ctx);
    if (!token && ctx) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const decodedToken: any = jwtDecode(token);
    const { user } = decodedToken;
    return func(ctx, token, user);
  };
}
