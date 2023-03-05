import { PhotoUploader } from "@/components/dash/photoUploader";
import { Layout } from "@/components/layout";

export default function NewPropertyMultimidia() {
  return (
    <Layout title="Adicionar novo imóvel">
      <PhotoUploader />
    </Layout>
  );
}
