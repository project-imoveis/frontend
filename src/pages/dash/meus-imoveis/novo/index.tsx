import CreatePropertyForm from "@/components/dash/createPropertyForm";
import { Layout } from "@/components/layout";

export default function NewProperty() {
  return (
    <Layout title="Adicionar novo imóvel">
      <div className="newProperty">
        <h1>Vamos cadastrar o seu imóvel</h1>
        <CreatePropertyForm />
      </div>
    </Layout>
  );
}
