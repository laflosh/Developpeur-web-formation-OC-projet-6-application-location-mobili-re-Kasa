import logements from "../../data/logements.json";
import CardGalery from "../CardGalery";
import "../../styles/components/Galery.scss";

function Galery(){

    return(

        <section>

            <ul className="galery">

                
                {logements.map( (logement) =>

                    <li key={logement.id}>

                        <CardGalery
                        title={logement.title}
                        cover={logement.cover}
                        />

                    </li>
                )}

            </ul>

        </section>

    )

}

export default Galery;