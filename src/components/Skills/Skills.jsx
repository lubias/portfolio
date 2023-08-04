import "./index.scss";
import {
  FaUnity,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Skils() {
  const { t } = useTranslation();

  return (
    <div id="Skills" className="Skills">
      <h1 className="Skills__h1">{t("Habilidades")}</h1>
      <p className="Skills__p">{t("Habilidades_descrição")}</p>
      <div className="Skills__div-icons">
        <div className="Skills__div-icon Skills__div-icon-js">
          <FaJs size={70} color="#F7DF1E" className="Skills__icones" />
          <span id="spanJS">Javascript</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-html">
          <FaHtml5 size={70} color="#E44D25" className="Skills__icones" />
          <span id="spanHTML">HTML5</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-css">
          <FaCss3 size={70} color="#379AD6" className="Skills__icones" />
          <span id="spanCSS">CSS3</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-react">
          <FaReact size={70} color="#00D8FF" className="Skills__icones" />
          <span id="spanReact">React</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-nodejs">
          <FaNodeJs size={70} color="#539e43" className="Skills__icones" />
          <span id="spanNodeJS">NodeJS</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-php">
          <FaPhp size={70} color="#8993be" className="Skills__icones" />
          <span id="spanPHP">PHP</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-github">
          <FaGithub size={70} color="#FFFFFF" className="Skills__icones" />
          <span id="spanGitHub">GitHub</span>
        </div>
        <div className="Skills__div-icon Skills__div-icon-unity">
          <FaUnity size={70} color="#000000" className="Skills__icones" />
          <span id="spanUnity">Unity</span>
        </div>
      </div>
    </div>
  );
}

export default Skils;
