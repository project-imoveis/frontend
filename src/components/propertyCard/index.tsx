import Image from "next/image";
import property from "../../assets/property.jpg";
import Carousel from "../carousel";
export default function PropertyCard() {
  return (
    <article className="propertyCard">
      <div className="propertyCard_image">
        {
          //<Image src={property} alt="" />
        }
        <Carousel infiniteLoop={false} />
      </div>
      <div className="propertyCard_description">
        <h2>Apartamento</h2>
        <h1>Riacho Fundo 1 - Brasília - DF</h1>
        <p>40m² - 2 quartos - 1 banheiro - 1 vaga</p>
      </div>
    </article>
  );
}
