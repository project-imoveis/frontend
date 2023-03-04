import PropertyCard from "../propertyCard";
import api from "@/@core/providers/api";
import { useQuery } from "react-query";

export default function Catalogo() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getInitialData,
  });
  async function getInitialData() {
    const response = await api.get("/properties");
    return response.data;
  }
  return (
    <section className="catalogo">
      <div className="catalogo_tags">
        <article>Venda</article>
        <article>Aluguel</article>
        <article>Casa</article>
        <article>Apartamento</article>
      </div>
      <h1>Imóveis que baixaram de preço em até 10% próximos a você</h1>
      <div className="catalogo_properties">
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          data.map((property: any, id: any) => <PropertyCard key={id} property={property} />)
        )}
      </div>
    </section>
  );
}
