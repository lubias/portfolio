import React from "react";
import './index.scss';

function Presentation() {
  return (
    <div id="Presentation" className="Presentation">
      <div className="Presentation__div-image">
        <img src="images/foto_perfil.jpg"/>
      </div>
      <div>
        <h4>
          <strong>Bem-vindo ao meu Portfólio</strong>
        </h4>
        <h1>Olá, eu sou Luana Beatriz</h1>
        <p>
          Sou graduada em Design de Jogos Digitas, mas sempre busquei me <br />
          desenvoler na área da programação. Trabalhei por 8 meses como <br />
          desenvolvedora web anteriormente, trabalhando principalmente com o <br />
          wordpress. E desde agosto de 2021 estou a trabalhar como desenvolvedora <br />
          web fullstack trabalhando principalmente com HTML, CSS, Javascript e <br />
          PHP. Também estou a fazer uma formação fullstack em tecnologia pela <br />
          escola DNC, em busca de aprender novas tecnologias, principalmente <br />
          React.js e Node.js.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
