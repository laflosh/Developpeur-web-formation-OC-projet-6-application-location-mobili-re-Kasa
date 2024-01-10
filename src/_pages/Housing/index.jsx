import { useLocation } from "react-router-dom";

function Housing(){

    let { state } = useLocation();
    console.log(state);

    return(

        <p>{state.title}</p>
        
    )

}

export default Housing;