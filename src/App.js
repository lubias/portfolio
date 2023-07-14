import './App.css';
import Navbar from './components/section/Navbar';
import Presentation from './components/section/Presentation';
import Projects from './components/section/Projects';
import Skils from './components/section/Skils';
import Footer from './components/section/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Skils />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
