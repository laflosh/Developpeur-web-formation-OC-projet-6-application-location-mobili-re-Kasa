import { useParams,useNavigate } from "react-router-dom";
import { dataById } from "../../data/dataTools";

function Housing(){

    let { id } = useParams();
    console.log(id)
    let navigate= useNavigate();

    if( id === undefined || ""){

        navigate("*")

    } else {

        let data = dataById(id);
        console.log(data);

        return(

            <p>{data.title}</p>
            
        )
    
    }

}

export default Housing;