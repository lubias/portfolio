import React from "react";
import ButtonYellow from "../ButtonYellow/ButtonYellow";
import "./index.scss";

function Projects() {
  return (
    <div id="Projects" className="Projects">
      <h1 className="Projects__h1">Projetos</h1>
      <p>Cards</p>
      <ButtonYellow text="Acesse meu repositório" link="https://github.com/lubias" />
    </div>
  );
}

export default Projects;
