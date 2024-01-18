import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataById } from "../../data/dataTools";
import CardHousing from "../../_components/CardHousing";

function Housing(){

    let navigate = useNavigate();
    let { id } = useParams();
    let data = dataById(id);

    let hasData = data != null && data !== undefined;

    useEffect(() => {

        if(!hasData){
            navigate("not-found");
        }

    });

    return hasData && <CardHousing data={data}/>;

}

export default Housing;