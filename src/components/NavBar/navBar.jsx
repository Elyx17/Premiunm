import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/cartWidget";
import Categorias from "./categorias/categorias";
import SwitchMode from "./SwitchMode/SwitchMode"
import { useDarkModeContext } from "../../context/DarkModeContext";

const NavBar = () => {

  const {darkMode} = useDarkModeContext()

    return (
<div className="add-nav-effect">
<nav className={`navbar navbar-expand-lg p-0 add-nav-effect-item ${darkMode ? 'darkModeBlock' :'navbar-light bg-light'}`}>
  <div className={`container-fluid ${darkMode ? 'darkModeText' : 'lightMode'}`}>
    <Link className={`navbar-brand ${darkMode ? 'darkModeText' : 'lightMode'}`} to={"/"}>Elyx Hall</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className={`navbar-nav me-auto ${darkMode ? 'darkModeText' : 'lightModeText'}`}>
        <li className="nav-item">
          <Link className="nav-link" to={"/"}>Inicio
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <Categorias/>
        <li className="nav-item">
          <Link className="nav-link" to={"/contacto"}>Contacto</Link>
        </li>
      </ul>
      <SwitchMode/>
      <CartWidget/>
    </div>
    
  </div>
</nav>
</div>
    );
}

export default NavBar;
