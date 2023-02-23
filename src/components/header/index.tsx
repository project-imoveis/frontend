import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";

export function Header({ isFixed }: any) {
  return (
    <header className={`header ${isFixed && "header-fixed"}`}>
      <h1>Imóveis</h1>
      <div className="header_group">
        <Link href="">
          Fale Conosco
          <AiFillPhone />
        </Link>
        <button>Acesso privado</button>
      </div>
    </header>
  );
}
