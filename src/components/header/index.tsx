import Link from "next/link";

export function Header({ isFixed }: any) {
  return (
    <header className={`header ${isFixed && "header-fixed"}`}>
      <h1>Imóveis</h1>
      <div className="header_group">
        <Link href="dash/meus-imoveis/novo">Anunciar</Link>

        <button>
          <Link href="dash/acesso">Acesso privado</Link>
        </button>
      </div>
    </header>
  );
}
