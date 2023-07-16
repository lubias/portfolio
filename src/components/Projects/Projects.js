import React from "react";
import "./index.scss";
import Card from "../Card/Card";

function Projects() {
  return (
    <div id="Projects" className="Projects">
      <h1 className="Projects__h1">Projetos</h1>
      <Card 
        imagem="images/projects/BoardTask_Backend.png"
        titulo="BoardTask - Backend"
        descricao="Projeto em Express.js do BoardTask Back-end feito para o curso da escola DNC."
        tecnologias="NodeJS, Express"
        link_projeto="https://board-task-back.vercel.app/doc/"
        link_repositorio="https://github.com/lubias/boardTask-Back"
      />
      <Card 
        imagem="images/projects/DNC_Movie_List.png"
        titulo="DNC Movie List"
        descricao="Projeto desenvolvido no módulo de React com Hooks da Escola DNC."
        tecnologias="React, HTML, SASS"
        link_projeto="https://lista-de-filmes-alpha.vercel.app/"
        link_repositorio="https://github.com/lubias/lista-de-filmes"
      />
      <Card 
        imagem="images/projects/Landing_Page_Arquitetura.png"
        titulo="Landing Page Arquitetura"
        descricao="Resolução do desafio 1 da formação de tecnologia da Escola DNC."
        tecnologias="HTML, CSS"
        link_projeto="https://desafio-1-resolucao.netlify.app/"
        link_repositorio="https://github.com/lubias/desafio-1-resolucao"
      />
      <br />
    </div>
  );
}

export default Projects;
