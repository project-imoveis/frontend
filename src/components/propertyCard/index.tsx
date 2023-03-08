import Image from "next/image";
import propertyPhoto1 from "../../assets/property.jpg";
import propertyPhoto2 from "../../assets/property2.jpg";
import propertyPhoto3 from "../../assets/building.jpg";
import thaisLogo from "../../assets/thais.png";
import { PropertyType } from "@/@core/models/property_model";
import Meter from "../../assets/meter.svg";
import Bedroom from "../../assets/bedroom.svg";
import Bathroom from "../../assets/bathroom.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
type PropertyCardProps = {
  key: number;
  property: PropertyType;
};
export default function PropertyCard({ property }: PropertyCardProps) {
  const [fav, setFav] = useState(false);
  function getMainImage() {
    if (property.Images.length > 0) {
      const mainImage = property.Images.find((image: any) => image.isMain == true);
      if (mainImage) return mainImage.url;
      return property.Images[0].url;
    }
    const images = [propertyPhoto1, propertyPhoto2, propertyPhoto3];
    const random = Math.floor(Math.random() * images.length);
    return images[random];
  }
  function favProperty() {
    setFav((old) => !old);
  }
  const getFavIcon = () => {
    return fav ? <FaHeart /> : <FaRegHeart />;
  };
  return (
    <article className="propertyCard">
      <div className="propertyCard_image">
        <Image src={getMainImage()} alt="foto do imóvel" fill />
      </div>
      <div className="propertyCard_description">
        <div className="propertyCard_description-group1">
          <h1>{`${property.Address.neighborhood.split(" (")[0]}, ${property.Address.city}`}</h1>
          <h2>{property.Address.street}</h2>
          <button type="button" onClick={favProperty}>
            {getFavIcon()}
          </button>
        </div>
        <div className="propertyCard_description-group2">
          <span>
            <Meter />
            {property.useful_area}m²
          </span>
          <span>
            <Bedroom />2
          </span>
          <span>
            <Bathroom />1
          </span>
        </div>
        <div className="propertyCard_description-group3">
          <h1>
            {property.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            })}
          </h1>
          <h2>+ R$ 230 Condomínio</h2>
          <Image src={thaisLogo} alt="logo" />
        </div>
      </div>
    </article>
  );
}
