import PropertyCard from "../propertyCard";
export default function Catalogo() {
  return (
    <section className="catalogo">
      <h1>Imóveis à venda</h1>
      <div className="catalogo_properties">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}
