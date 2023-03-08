import Image from "next/image";
import livingRoom from "../../assets/living_homepage.jpg";
export function Banner() {
  return (
    <section className="banner">
      <div className="banner_mainImage" />
      <div className="banner_filter" />
      <div className="banner_content">
        <form onSubmit={(e) => e.preventDefault()} className="banner_searchForm">
          <div className="banner_searchForm_group">
            <input
              className="banner_searchForm_group-radioField"
              type="radio"
              id="Alugar"
              name="post_type"
              value="Alugar"
              defaultChecked
            />
            <label className="banner_searchForm_group-radioLabel" htmlFor="Alugar">
              Alugar
            </label>
            <input
              className="banner_searchForm_group-radioField"
              type="radio"
              id="Comprar"
              name="post_type"
              value="Comprar"
            />
            <label className="banner_searchForm_group-radioLabel" htmlFor="Comprar">
              Comprar
            </label>
          </div>
          <div className="banner_searchForm_group">
            <select className="banner_searchForm_group-searchSelect">
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Terreno">Terreno</option>
            </select>
            <input
              className="banner_searchForm_group-searchField"
              placeholder="Digite o nome da cidade, bairro ou rua.."
            />
            <button className="banner_searchForm_group-searchButton">Buscar</button>
          </div>
          <div className="banner_searchForm_group">
            <p>Explorar imóveis</p>
          </div>
        </form>
        <div className="banner_sideImage">
          <Image className="banner_sideImage-image" src={livingRoom} alt="living room" />
          <h1 className="banner_sideImage-slogan">
            Seu imóvel,
            <br /> do seu jeito
          </h1>
        </div>
      </div>
    </section>
  );
}
