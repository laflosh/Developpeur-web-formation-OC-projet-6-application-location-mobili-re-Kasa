import { NavLink, } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header(){

    let activeLinkStyle = ({isActive}) => {

        return {
            "border-bottom": isActive && "2px solid #FF6060",
        };
    };

    return(

        <header className="header">

            <img className="header__logo" src={logo} title="Logo" alt="Logo de Kasa"/>

            <nav className="navbar">

                <NavLink 
                className="navbar__link" 
                to="/"
                style={activeLinkStyle}
                >
                    Accueil
                </NavLink>
                <NavLink 
                className="navbar__link" 
                to="/about"
                style={activeLinkStyle}
                >
                    A propos
                </NavLink>

            </nav>

        </header>

    )

}

export default Header;