import React, { useState } from "react";
import "./index.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";

function Navbar() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    if(newLanguage == 'en'){
      window.document.getElementById('flag-language').src = 'images/languages/brazil.png';
    }else{
      window.document.getElementById('flag-language').src = 'images/languages/united-states.png';
    }
  };

  return (
    <div className="Navbar">
      <div className="Navbar__div-logo"><Nav.Link href="/"><img id="logo" className="Navbar__logo" src="images/Logo_sem_fundo_branco.png" /></Nav.Link></div>
      <ul className="Navbar__ul">
        <li className="Navbar__li">
          <Nav.Link href="#Presentation">{t("Apresentação")}</Nav.Link>
        </li>
        <li className="Navbar__li">
          <Nav.Link href="#Skills">{t("Habilidades")}</Nav.Link>
        </li>
        <li className="Navbar__li">
          <Nav.Link href="#Projects">{t("Projetos")}</Nav.Link>
        </li>
      </ul>
      <ul className="Navbar__ul">
        <li className="Navbar__li">
          <a
            href="https://www.linkedin.com/in/luana-beatriz-dos-santos-4095b8107/"
            target="_blank"
          >
            <FaLinkedin size={30} className="icones" />
          </a>
        </li>
        <li className="Navbar__li">
          <a href="https://github.com/lubias" target="_blank">
            <FaGithub size={30} className="icones" />
          </a>
        </li>
        <li><img id="flag-language" className="Navbar__flag-language" src="images/languages/united-states.png" onClick={handleChangeLanguage} /></li>
      </ul>
    </div>
  );
}

export default Navbar;
