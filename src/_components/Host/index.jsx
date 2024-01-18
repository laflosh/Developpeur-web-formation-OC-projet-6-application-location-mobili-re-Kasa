

function Host({name,picture}){

    return(

        <div className="host">

            <p className="host__name">{name}</p>

            <img className="host__pic" src={picture} title="Photo" alt="hôte de l'annonce"/>

        </div>

    )

}

export default Host;