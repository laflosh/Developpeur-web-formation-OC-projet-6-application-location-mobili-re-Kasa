import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header(){

    return(

        <header className="header">

            <img className="header__logo" src={logo} title="Logo" alt="Logo de Kasa"/>

            <nav className="navbar">

                <Link className="navbar__link" to="/">Accueil</Link>
                <Link className="navbar__link" to="/about">A propos</Link>

            </nav>

        </header>

    )

}

export default Header;