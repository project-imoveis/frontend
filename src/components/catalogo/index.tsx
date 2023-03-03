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
      <h1>Imóveis à venda</h1>
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
