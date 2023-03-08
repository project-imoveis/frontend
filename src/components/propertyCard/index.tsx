import Image from "next/image";
import propertyPhoto1 from "../../assets/property.jpg";
import propertyPhoto2 from "../../assets/property2.jpg";
import propertyPhoto3 from "../../assets/building.jpg";
import { PropertyType } from "@/@core/models/property_model";

type PropertyCardProps = {
  key: number;
  property: PropertyType;
};
export default function PropertyCard({ property }: PropertyCardProps) {
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

  return (
    <article className="propertyCard">
      <div className="propertyCard_image">
        <Image src={getMainImage()} alt="foto do imóvel" fill />
      </div>
      <div className="propertyCard_description">
        <h2>{property.post_type}</h2>
        <h1>{property.title}</h1>
        <p>{property.useful_area}m² - 2 quartos - 1 banheiro - 1 vaga</p>
      </div>
    </article>
  );
}
