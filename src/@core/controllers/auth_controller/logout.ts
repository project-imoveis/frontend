import Router from "next/router";
import nookies from "nookies";
export const logout = () => {
  nookies.destroy(null, "token", { path: "/" });
  nookies.destroy(null, "user_name", { path: "/" });
  nookies.destroy(null, "user_email", { path: "/" });
  nookies.destroy(null, "user_uuid", { path: "/" });
  nookies.destroy(null, "user_type", { path: "/" });
  Router.push("/dash/login");
};
