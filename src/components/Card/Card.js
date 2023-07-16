import ButtonYellow from "../ButtonYellow/ButtonYellow";
import "./index.scss";

function Card({imagem, titulo, descricao, tecnologias, link_projeto, link_repositorio}) {
  return (
    <div className="Card">
      <img className="Card__imagem" src={imagem} />
      <div className="Card__div-informacoes">
        <h2 className="Card__titulo">{titulo}</h2>
        <p className="Card__descricao">{descricao}</p>
        <div className="Card__skills">
          <span className="Card__label-skills">Tecnologias: </span><span>{tecnologias}</span>
        </div>
        <div className="Card__div-botoes">
          <ButtonYellow
            text="Link para o projeto"
            link={link_projeto}
          />
          <ButtonYellow
            text="Acesse o repositório"
            link={link_repositorio}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
