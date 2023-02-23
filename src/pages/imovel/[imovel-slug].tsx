import Carousel from "@/components/carousel";
import { Header } from "@/components/header";
import { BsWhatsapp } from "react-icons/bs";
export default function PropertyPage() {
  return (
    <main className="propertyPage">
      <Header isFixed={true} />
      <section className="propertyPage_content">
        <h1 className="propertyPage_content_title">
          Apartamento no riacho fundo I, recém reformado
        </h1>
        <div className="propertyPage_content_banner">
          <section className="propertyPage_content_banner_carousel">
            <Carousel isFixed={true} />
          </section>
          <aside className="propertyPage_content_banner_resume">
            <div className="propertyPage_content_banner_resume_value">
              <label>Valor</label> <h1>R$ 520.000,00</h1>
            </div>
            <div className="propertyPage_content_banner_resume_general">
              <label>520m²</label> - <label>5 Quartos</label> -<label>3 Banheiros</label>-
              <label> 2 vagas</label>
            </div>
            <div className="propertyPage_content_banner_resume_contato">
              <h1>Entre em contato</h1>
              <input type="text" placeholder="Nome completo" />
              <div>
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Telefone" />
              </div>
              <button>Enviar</button>
            </div>
            <a>
              <BsWhatsapp />
              (61)982015326
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
