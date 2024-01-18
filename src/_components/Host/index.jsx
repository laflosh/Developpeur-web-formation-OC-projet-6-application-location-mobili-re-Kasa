

function Host({name,picture}){

    return(

        <>

            <p className="name">{name}</p>

            <img className="pic" src={picture} title="Photo" alt="hôte de l'annonce"/>

        </>

    )

}

export default Host;