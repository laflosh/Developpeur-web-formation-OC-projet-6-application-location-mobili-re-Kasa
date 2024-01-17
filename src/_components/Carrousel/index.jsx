import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

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

            <FontAwesomeIcon 
            icon={faChevronUp}
            className="carrousel__buttonLeft"
            onClick={() => prevImage()}
            />

            <img 
            className="carrousel__image"
            src={imageShow[count]} 
            alt="visuel de l'annonce"
            />

            <span className="carrousel__value">{count + 1}/{arrayLength}</span>

            <FontAwesomeIcon 
            icon={faChevronUp}
            className="carrousel__buttonRight"
            onClick={() => nextImage()}
            />

        </div>

        )

    }

}

export default Carrousel