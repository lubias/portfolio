import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";
import Skils from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="pt-br"></html>
          <title>Portfólio Luana Beatriz</title>
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
