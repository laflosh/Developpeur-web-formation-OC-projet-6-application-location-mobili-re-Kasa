import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { dataGalery,dataById } from "../../data/dataTools";
import CardGalery from "../CardGalery";
import "../../styles/components/Galery.scss";

function Galery(){

    let [idValue, setIdValue] = useState("");
    let navigate = useNavigate();

    let datas = dataGalery();

    //let dataHousingPage = dataById(idValue);

    function handleClick(id){

        setIdValue(idValue = id);
        console.log(idValue);

        redirectionHousingPage();
        
    };

    function redirectionHousingPage(){
        if(idValue === ""){
            return
        } else {
            let dataHousingPage = dataById(idValue);
            navigate("/housing", {state : dataHousingPage });
        }
        
    }

    return(

        <section>

            <ul className="galery">

                
                {datas.map( (data) =>

                    <li key={data.id}
                    onClick={() => handleClick(data.id)}
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