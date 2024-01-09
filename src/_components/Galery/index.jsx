import { useState } from "react";
import { dataGalery,dataById } from "../../data/dataTools";
import CardGalery from "../CardGalery";
import "../../styles/components/Galery.scss";

function Galery(){

    let [idValue, setIdValue] = useState("");
    console.log(idValue);
    let dataHousingPage = dataById(idValue);
    console.log(dataHousingPage)

    let datas = dataGalery();

    return(

        <section>

            <ul className="galery">

                
                {datas.map( (data) =>

                    <li key={data.id}
                    onClick={() => setIdValue(data.id)}
                    >

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