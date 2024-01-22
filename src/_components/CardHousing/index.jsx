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

    return(

        <section className="cardHousing">

            <Carrousel pictures={data.pictures}/>

            <div className="countainerMain">

                <div className="countainerFirst">

                    <div className="cardHousing__title">

                        <Title
                        title={data.title}
                        location={data.location}
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

                </div>

                
                <div className="countainerSecond">

                    <div className="cardHousing__host">

                        <Host
                        name={host.name}
                        picture={host.picture}
                        />

                    </div>

                    <div className="cardHousing__rating">

                        <Rating
                        rating={data.rating}
                        nbStar={5}
                        />

                    </div>

                </div>

            </div>

            <div className="cardHousing__collapse">

                <div className="cardHousing__collapse--size">
                    <Collapsable title="Description">
                        <div>
                            <p>{data.description}</p>
                        </div>
                    </Collapsable>
                    
                </div>

                <div className="cardHousing__collapse--size">
                    <Collapsable title="Equipements">
                        <ul>
                            {data.equipments.map((equipment, index) =>
                                <li key={index}>{equipment}</li>
                            )}
                        </ul>
                    </Collapsable>
                    
                </div>

            </div>

        </section>

    )

}

export default CardHousing;