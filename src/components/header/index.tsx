import Link from "next/link";

export function Header({ isFixed }: any) {
  return (
    <header className={`header ${isFixed && "header-fixed"}`}>
      <Link href="/">
        <h1>Imóveis</h1>
      </Link>
      <div className="header_group">
        <Link href="dash/meus-imoveis/novo">Anunciar</Link>

        <button>
          <Link href="dash/login">Acesso privado</Link>
        </button>
      </div>
    </header>
  );
}
