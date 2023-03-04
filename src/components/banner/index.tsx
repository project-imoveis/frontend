export function Banner() {
  return (
    <section className="banner">
      <div className="banner_photo"></div>
      <h1>Seu site de imóveis</h1>
      <div className="banner_inputGroup">
        <input placeholder="Digite a cidade, bairro ou logadouro" />
        <button>Pesquisar</button>
      </div>
    </section>
  );
}
