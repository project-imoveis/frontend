import Link from "next/link";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";

export function Header({ isFixed }: any) {
  const [userName, setUserName] = useState<string | null>(null);
  const { user_name } = parseCookies();
  useEffect(() => {
    setUserName(user_name);
  }, [user_name]);
  return (
    <header className={`header ${isFixed && "header-fixed"}`}>
      <div className="header_group">
        <Link className="header_group-logo" href="/">
          <h1>Imóveis</h1>
        </Link>
        <div className="header_group-options">
          <Link href="#">Aluguel</Link>
          <Link href="#">Venda</Link>
        </div>
      </div>
      <div className="header_group">
        <Link className="header_group-anunciar" href="dash/meus-imoveis/novo">
          Anunciar
        </Link>

        {userName ? (
          <Link href="dash" className="header_group-user">
            Olá, {userName}
          </Link>
        ) : (
          <Link href="dash/login" className="header_group-user">
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
