import Carrousel from "../Carrousel";

function CardHousing(props){

    let data = props.data;

    return(

        <section className="cardHousing">

            <Carrousel picture={data.pictures}/>

        </section>

    )

}

export default CardHousing;