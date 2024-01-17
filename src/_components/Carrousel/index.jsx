import { useState } from "react";

function Carrousel(props){

    let arrayLength = props.picture.length;
    let [count, setCount] = useState(0);
    let imageShow = props.picture;

    function prevImage(){
        if (count < 0) {
            setCount(count = arrayLength - 1)
        } else {
            setCount(count--);
        }
    }

    function nextImage(){
        if (count === arrayLength) {
            setCount(count = 0);
        } else {
            setCount(count++);
        }
    }

    if (arrayLength === 1){

        return(

            <div className="carrousel">

            <img 
            className="carrousel__image"
            src={imageShow[count]} 
            alt="visuel de l'annonce"
            />

            </div>

        )
    } else {

        return (

        <div className="carrousel">

            <button 
            className="carrousel__button"
            onClick={() => prevImage()}
            >
                Précédent

            </button>

            <img 
            className="carrousel__image"
            src={imageShow[count]} 
            alt="visuel de l'annonce"
            />

            <span className="carrousel__value">{count + 1} / {arrayLength}</span>

            <button 
            className="carrousel__button"
            onClick={() => nextImage()}
            >
                Suivant

            </button>

        </div>

        )

    }

}

export default Carrousel