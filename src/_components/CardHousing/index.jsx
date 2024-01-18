import Carrousel from "../Carrousel";
import Tag from "../Tag";

function CardHousing(props){

    let data = props.data;
    let tags = data.tags

    console.log(data)
    console.log(tags)

    return(

        <section className="cardHousing">

            <Carrousel picture={data.pictures}/>

            <ul className="cardHousing__tag">

                {tags.map((tag,index) =>

                    <Tag
                    key={index}
                    tag={tag}
                    />

                )}

            </ul>

        </section>

    )

}

export default CardHousing;