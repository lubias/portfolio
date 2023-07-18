import ButtonYellow from "../ButtonYellow/ButtonYellow";
import "./index.scss";
import { useTranslation } from "react-i18next";

function Card({
  imagem,
  titulo,
  descricao,
  tecnologias,
  link_projeto,
  link_repositorio,
}) {
  const { t } = useTranslation();
  return (
    <div className="Card">
      <img className="Card__imagem" src={imagem} />
      <div className="Card__div-informacoes">
        <h2 className="Card__titulo">{titulo}</h2>
        <p className="Card__descricao">{descricao}</p>
        <div className="Card__skills">
          <span className="Card__label-skills">{t("Tecnologias")}: </span>
          <span>{tecnologias}</span>
        </div>
        <div className="Card__div-botoes">
          <ButtonYellow text={t("Link_para_projeto")} link={link_projeto} />
          <ButtonYellow text={t("Acesse_repositorio")} link={link_repositorio} />
        </div>
      </div>
    </div>
  );
}

export default Card;
