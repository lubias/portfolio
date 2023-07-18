import "./index.scss";
import { useTranslation } from "react-i18next";

function Presentation() {
  const {
    t
  } = useTranslation();

  return (
    <div id="Presentation" className="Presentation">
      <div className="Presentation__div-image">
        <img src="images/foto_perfil.jpg" />
      </div>
      <div className="Presentation__div-text">
        <h4>{t("Bem_vindo")}</h4>
        <h1>{t("Ola")}</h1>
        <p>
          {t("Bio_1")}
          {t("Bio_2")}
          {t("Bio_3")}
        </p>
      </div>
    </div>
  );
}

export default Presentation;
