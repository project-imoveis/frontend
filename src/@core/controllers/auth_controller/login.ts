import axios, { AxiosError } from "axios";
import router from "next/router";
import { setCookie } from "nookies";
import { toast } from "react-toastify";
import { loginProps } from "../../models/auth_model";
import { AuthService } from "../../services/auth_services";

export const login = async (data: loginProps) => {
  try {
    const {
      data: { user, token },
    } = await AuthService.login(data);

    setCookie(null, "token", token, {
      maxAge: 60 * 24 * 24 * 1,
      path: "/",
      secure: true,
    });
    setCookie(null, "user_name", user.name, {
      maxAge: 60 * 24 * 24 * 1,
      path: "/",
      secure: true,
    });

    setCookie(null, "user_email", user.email, {
      maxAge: 60 * 24 * 24 * 1,
      path: "/",
      secure: true,
    });
    setCookie(null, "user_uuid", user.uuid, {
      maxAge: 60 * 24 * 24 * 1,
      path: "/",
      secure: true,
    });
    setCookie(null, "user_type", user.user_type, {
      maxAge: 60 * 24 * 24 * 1,
      path: "/",
      secure: true,
    });

    router.push("/dash");

    toast("Login bem sucedido!", { hideProgressBar: true, autoClose: 2000, type: "success" });

    return { token, user };
  } catch (err: any | AxiosError) {
    if (!axios.isAxiosError(err)) {
      return new Error("Não foi possível realizar o login.");
    }
    switch (err.response?.status) {
      case 404:
        toast.error("Usuário não cadastrado.");
        break;
      case 401:
        toast.error("Senha incorreta.");
        break;
      case 500:
        toast.error("Erro de comunicação com o servidor.");
        break;
      default:
        toast.error("Não foi possível realizar o login, tente novamente mais tarde!!!");
    }
  }
  return new Error("Não foi possível realizar o login.");
};
