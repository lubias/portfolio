
import Card from '../../components/Card/Card';
import NavbarProjects from '../../components/NavbarProjects/NavbarProjects'
import "./index.scss";
import { useTranslation } from "react-i18next";

function Projects({data}) {
  const {
    t
  } = useTranslation();

  return (
    <div className='PageProjects'>
      <NavbarProjects />
      <h1 className='PageProjects__h1'>{t("Projetos")}</h1>
      <div className="PageProjects__projects">
        {data.map((projeto) => (
          <Card
            imagem={projeto.imagem}
            titulo={t(projeto.titulo)}
            descricao={t(projeto.descricao)}
            tecnologias={projeto.tecnologias}
            link_projeto={projeto.link_projeto}
            link_repositorio={projeto.link_repositorio}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects