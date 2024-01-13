import { useLocation } from "react-router-dom";

function Housing(){


    //récupération de l'id
    //si id ={] => 404

    let { state } = useLocation();
    console.log(state);

    return(

        <p>{state.title}</p>
        
    )

}

export default Housing;