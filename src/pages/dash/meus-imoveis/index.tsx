import { Layout } from "@/components/layout";
import Link from "next/link";

export default function imoveis() {
  return (
    <Layout title="Meus imóveis">
      <div className="properties">
        <header className="properties_header">
          <Link href="/dash/meus-imoveis/novo" className="properties_createButton">
            Adicionar imóvel
          </Link>
        </header>
        <div className="properties_list"></div>
      </div>
    </Layout>
  );
}
