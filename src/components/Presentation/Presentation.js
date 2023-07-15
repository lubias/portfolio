import React from "react";
import "./index.scss";

function Presentation() {
  return (
    <div id="Presentation" className="Presentation">
      <div className="Presentation__div-image">
        <img src="images/foto_perfil.jpg" />
      </div>
      <div className="Presentation__div-text">
        <h4>Bem-vindo(a) ao meu Portfólio</h4>
        <h1>Olá, eu sou Luana Beatriz</h1>
        <p>
          Sou graduada em Design de Jogos Digitas, mas sempre busquei me
          desenvoler na área da programação. Trabalhei por 8 meses como
          desenvolvedora web anteriormente, trabalhando principalmente com o
          wordpress. E desde agosto de 2021 estou a trabalhar como
          desenvolvedora web fullstack trabalhando principalmente com HTML, CSS,
          Javascript e PHP. Também estou a fazer uma formação fullstack em
          tecnologia pela escola DNC, em busca de aprender novas tecnologias,
          principalmente React.js e Node.js.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
