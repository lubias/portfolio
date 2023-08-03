import "./index.scss";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import ButtonYellow from "../ButtonYellow/ButtonYellow";

function Projects() {
  const { t } = useTranslation();

  return (
    <div id="Projects" className="Projects">
      <h1 className="Projects__h1">{t("Projetos")}</h1>
      <Card
        imagem="images/projects/BoardTask_Backend.png"
        titulo={t("Titulo_projeto_1")}
        descricao={t("Descição_projeto_1")}
        tecnologias="NodeJS, Express"
        link_projeto="https://board-task-back.vercel.app/doc/"
        link_repositorio="https://github.com/lubias/boardTask-Back"
      />
      <Card
        imagem="images/projects/DNC_Movie_List.png"
        titulo={t("Titulo_projeto_2")}
        descricao={t("Descição_projeto_2")}
        tecnologias="React, HTML, SASS"
        link_projeto="https://lista-de-filmes-alpha.vercel.app/"
        link_repositorio="https://github.com/lubias/lista-de-filmes"
      />
      <Card
        imagem="images/projects/Landing_Page_Arquitetura.png"
        titulo={t("Titulo_projeto_3")}
        descricao={t("Descição_projeto_3")}
        tecnologias="HTML, CSS"
        link_projeto="https://desafio-1-resolucao.netlify.app/"
        link_repositorio="https://github.com/lubias/desafio-1-resolucao"
      />
      <div className="Projects__div-button"><ButtonYellow text={t("Veja mais projetos")} link={"/projetos"} target="_self" /></div>
      <br />
    </div>
  );
}

export default Projects;
