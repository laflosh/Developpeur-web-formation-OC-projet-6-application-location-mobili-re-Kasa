import { useParams,useNavigate } from "react-router-dom";
import { dataById } from "../../data/dataTools";
import CardHousing from "../../_components/CardHousing";

function Housing(){

    let { id } = useParams();
    console.log(id)
    let navigate= useNavigate();

    if( id === undefined || ""){

        navigate("*")

    } else {

        let data = dataById(id);

        return(
            
            <>

                <CardHousing data={data}/>

            </>
            
        )
    
    }

}

export default Housing;