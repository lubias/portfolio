import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Presentation from "../../components/Presentation/Presentation"
import Projects from "../../components/Projects/Projects"
import Skils from "../../components/Skills/Skills"

function Home() {
  return (
    <div>
        <Navbar />
        <Presentation />
        <Skils />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home