import PropertyCard from "../propertyCard";
import api from "@/@core/providers/api";
import { useQuery } from "react-query";
import Image from "next/image";
import cozinha from "../../assets/cozinha.png";
import sala from "../../assets/sala_apartamento.png";
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
        <article className="catalogo_tags_article">
          <Image className="catalogo_tags_article-image" src={cozinha} alt="Foto de uma casa" />
          <p>Casas</p>
        </article>
        <article className="catalogo_tags_article">
          <Image className="catalogo_tags_article-image" src={sala} alt="Foto de um apartamento" />
          <p>Apartamentos</p>
        </article>
        <article className="catalogo_tags_article">
          <Image className="catalogo_tags_article-image" src={sala} alt="Foto de uma casa" />
          <p>Ver mais...</p>
        </article>
      </div>
      <div className="catalogo_properties">
        <h1>Imóveis mais vistos na semana</h1>
        <div className="catalogo_properties_carousel">
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Não foi possível carregar</p>
          ) : (
            data.map((property: any, id: any) => <PropertyCard key={id} property={property} />)
          )}
        </div>
      </div>

      <div className="catalogo_properties">
        <h1>Baixaram de preço</h1>
        <div className="catalogo_properties_carousel">
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Não foi possível carregar</p>
          ) : (
            data.map((property: any, id: any) => <PropertyCard key={id} property={property} />)
          )}
        </div>
      </div>
      <div className="catalogo_anuncio big">
        <h1>ANÚNCIO</h1>
      </div>
      <div className="catalogo_properties">
        <h1>Melhores apartamentos na sua região</h1>
        <div className="catalogo_properties_carousel">
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Não foi possível carregar</p>
          ) : (
            data.map((property: any, id: any) => <PropertyCard key={id} property={property} />)
          )}
        </div>
      </div>
      <div className="catalogo_anuncio small">
        <h1>ANÚNCIO</h1>
      </div>
    </section>
  );
}
