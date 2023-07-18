import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";
import Skils from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import {Helmet} from "react-helmet";
import { useTranslation } from "react-i18next";

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
      <Navbar />
      <Presentation />
      <Skils />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
