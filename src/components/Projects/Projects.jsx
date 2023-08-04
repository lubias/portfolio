import "./index.scss";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import ButtonYellow from "../ButtonYellow/ButtonYellow";

function Projects({data}) {
  const { t } = useTranslation();

  return (
    <div id="Projects" className="Projects">
      <h1 className="Projects__h1">{t("Projetos")}</h1>
      {data.map((projeto) => (
          <Card
            imagem={projeto.imagem}
            titulo={t(projeto.titulo)}
            descricao={t(projeto.descricao)}
            tecnologias={projeto.tecnologias}
            link_projeto={projeto.link_projeto}
            link_repositorio={projeto.link_repositorio}
          />
        ))}
      <div className="Projects__div-button"><ButtonYellow text={t("Ver_mais_projetos")} link={"/projetos"} target="_self" /></div>
      <div className="Projects__div-button Projects__div-button-margin"><ButtonYellow text={t("Ver_repositório_completo")} link={"https://github.com/lubias?tab=repositories"} target="_blank"/></div>
      <br />
    </div>
  );
}

export default Projects;
