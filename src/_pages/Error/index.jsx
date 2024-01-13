import {Link} from "react-router-dom";
import logoError from "../../assets/404.svg";

function Error(){

    return(

        <section className="error">

            <img className="error__logo" src={logoError} alt="logo d'erreur"/>

            <p className="error__content">Oups! La page que vous demandez n'existe pas.</p>

            <Link className="error__link" to="/">Retourner sur la page d'accueil</Link>

        </section>

    )

}

export default Error;