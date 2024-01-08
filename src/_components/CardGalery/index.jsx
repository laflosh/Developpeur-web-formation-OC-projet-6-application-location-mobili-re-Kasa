import "../../styles/components/CardGalery.scss"

function CardGalery({title, cover}){

    return(

        <div className="card">

            <img className="card__image" src={cover} title="Photo" alt={title}/>
            <span className="card__title">{title}</span>

        </div>

    )

}

export default CardGalery;