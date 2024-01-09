import { dataGalery } from "../../data/dataTools";
import CardGalery from "../CardGalery";
import "../../styles/components/Galery.scss";

function Galery(){

    let datas = dataGalery();

    return(

        <section>

            <ul className="galery">

                
                {datas.map( (data) =>

                    <li key={data.id}>

                        <CardGalery
                        title={data.title}
                        cover={data.cover}
                        />

                    </li>
                )}

            </ul>

        </section>

    )

}

export default Galery;