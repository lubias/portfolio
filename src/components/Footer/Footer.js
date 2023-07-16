import { FaLinkedin, FaGithub } from "react-icons/fa";
import './index.scss';

function Footer() {
  return (
    <div className="Footer">
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
      </ul>
      <p><a href="mailto:luanabia_s@live.com">luanabia_s@live.com</a></p>
      <p>Luana Beatriz © 2023</p>
    </div>
  );
}

export default Footer;
