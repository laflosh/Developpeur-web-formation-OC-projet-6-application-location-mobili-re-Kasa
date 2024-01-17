
function CardGalery({title, cover}){

    return(

        <div className="card">

            <img className="card__image" src={cover} title="Photo" alt={title}/>
            <div className="card__layer">
                <span className="card__title">{title}</span>
            </div>

        </div>

    )

}

export default CardGalery;