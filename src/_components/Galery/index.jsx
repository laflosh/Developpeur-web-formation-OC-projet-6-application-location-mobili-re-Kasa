import logements from "../../data/logements.json";
import CardGalery from "../CardGalery";
import "../../styles/components/Galery.scss";

function Galery(){

    return(

        <section>

            <ul className="galery">

                
                {logements.map((logements) =>

                    <li key={logements.id}>

                        <CardGalery
                        title={logements.title}
                        cover={logements.cover}
                        />

                    </li>
                )}

            </ul>

        </section>

    )

}

export default Galery;