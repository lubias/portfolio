import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Presentation from "../../components/Presentation/Presentation"
import Projects from "../../components/Projects/Projects"
import Skils from "../../components/Skills/Skills"
import { PROJECTS_HOME_MOCK } from "../../mocks/projetos_home.mock"


function Home() {
  return (
    <div>
        <Navbar />
        <Presentation />
        <Skils />
        <Projects data={PROJECTS_HOME_MOCK} />
        <Footer />
    </div>
  )
}

export default Home