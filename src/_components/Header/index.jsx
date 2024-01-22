import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header(){

    let activeLinkStyle = ({isActive}) => {

        return {
            "borderBottom": isActive && "2px solid #FF6060",
        };
    };

    return(

        <header className="header">

            <NavLink to="/">
                <img className="header__logo" src={logo} title="Logo" alt="Logo de Kasa"/>
            </NavLink>

            <nav className="navbar">

                <NavLink to="/"
                    className="navbar__link" 
                    style={activeLinkStyle}
                >
                    Accueil
                </NavLink>
                <NavLink to="/about"
                    className="navbar__link" 
                    style={activeLinkStyle}
                >
                    A propos
                </NavLink>

            </nav>

        </header>

    )

}

export default Header;