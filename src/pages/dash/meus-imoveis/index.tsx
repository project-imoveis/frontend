import { Layout } from "@/components/layout";
import PropertyCard from "@/components/propertyCard";
import Link from "next/link";

export default function imoveis() {
  return (
    <Layout title="Seus imóveis">
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
