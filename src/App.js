import "./App.css";
import {Helmet} from "react-helmet";
import { useTranslation } from "react-i18next";
import Home from "./views/Home/Home";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="pt-br"></html>
          <title>{t("Titulo_do_site")}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Home />
    </div>
  );
}

export default App;
