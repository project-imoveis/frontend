import Image from "next/image";
import property from "../../assets/property.jpg";
import Carousel from "../carousel";
import { PropertyType } from "@/@core/models/property_model";

type PropertyCardProps = {
  key: number;
  property: PropertyType;
};
export default function PropertyCard({ key, property }: PropertyCardProps) {
  return (
    <article className="propertyCard">
      <div className="propertyCard_image">
        {
          //<Image src={property} alt="" />
        }
        <Carousel infiniteLoop={false} />
      </div>
      <div className="propertyCard_description">
        <h2>{property.post_type}</h2>
        <h1>{property.titulo}</h1>
        <p>{property.area_util}m² - 2 quartos - 1 banheiro - 1 vaga</p>
      </div>
    </article>
  );
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
