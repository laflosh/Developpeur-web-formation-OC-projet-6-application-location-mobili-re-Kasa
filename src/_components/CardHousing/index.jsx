import Carrousel from "../Carrousel";
import Title from "../Title";
import Host from "../Host";
import Rating from "../Rating";
import Tag from "../Tag";
import Collapsable from "../Collapsable";

function CardHousing(props){

    let data = props.data;
    let tags = data.tags
    let host = data.host

    console.log(data)

    return(

        <section className="cardHousing">

            <Carrousel pictures={data.pictures}/>

            <div className="cardHousing__title">

                <Title
                title={data.title}
                location={data.location}
                />

            </div>

            <div className="cardHousing__host">

                <Host
                name={host.name}
                picture={host.picture}
                />

            </div>

            <div className="cardHousing__rating">

                <Rating
                rating={data.rating}
                />

            </div>

            <ul className="cardHousing__tag">

                {tags.map((tag,index) =>

                    <Tag
                    key={index}
                    tag={tag}
                    />

                )}

            </ul>

            <div className="cardHousing__collapse">

                <div className="cardHousing__collapse--size">
                    <Collapsable
                    title={"Description"}
                    content={data.description}
                    />
                </div>

                <div className="cardHousing__collapse--size">
                    <Collapsable
                    title={"Equipements"}
                    content={data.equipments}
                    />
                </div>

            </div>

        </section>

    )

}

export default CardHousing;