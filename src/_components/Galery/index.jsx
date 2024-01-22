import CardGalery from "../CardGalery";

function Galery(props){

    function handleClick(id){
        if(props.onClickHandler){
            props.onClickHandler(id);
        }
    }

    return(

        <section>

            <ul className="galery">

                
                {props.data.map( (data) =>

                    <li key={data.id} onClick={() => handleClick(data.id)}>

                        <CardGalery
                        title={data.title}
                        cover={data.cover}
                        />

                    </li>
                )}

            </ul>

        </section>

    )

}

export default Galery;