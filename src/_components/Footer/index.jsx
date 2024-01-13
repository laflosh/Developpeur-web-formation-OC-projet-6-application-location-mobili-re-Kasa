import logo from "../../assets/logo_white.svg";

function Footer(){

    return(

        <footer className="footer">

            <img className="footer__logo" src={logo} title="Logo" alt="Logo de Kasa en blanc"/>

            <p className="footer__content">© 2020 Kasa. All rights reserved</p>

        </footer>

    )

}

export default Footer;