import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

export default function Login() {
  const { login } = useAuth();

  const defaultValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(defaultValues);

  function setValue(chave: string, valor: string) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(values);
  }
  return (
    <div className="login">
      <section className="login_content">
        <div className="login_logo"></div>

        <h1>Fazer login</h1>
        <h2>Use sua conta Imoveis</h2>
        <form method="POST" className="login_form" onSubmit={(event) => handleSubmit(event)}>
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="user@gmail.com"
            autoComplete="email"
            onChange={(event) => handleChange(event)}
          />
          <input
            className="login_input"
            type="password"
            name="password"
            placeholder="Senha"
            autoComplete="current-password"
            onChange={(event) => handleChange(event)}
          />
          <button className="login_button" type="submit">
            Entrar
          </button>
          <Link href="/register" className="login_ResetPassword">
            <span> Não tem uma conta?</span> Cadastre-se!
          </Link>
          <Link href="/reset-password" className="login_ResetPassword">
            Esqueci minha senha!
          </Link>
        </form>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { token } = parseCookies(ctx);
  if (token && ctx) {
    return {
      redirect: {
        destination: "/dash",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
