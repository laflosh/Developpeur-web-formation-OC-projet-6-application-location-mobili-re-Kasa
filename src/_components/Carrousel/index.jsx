import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Carrousel(props){

    let pictures = props.pictures;
    let hasImages = pictures.length > 1;
    let [count, setCount] = useState(0);
    
    function prevImage(){

        if (count <= 0) {
            count = pictures.length -1;
        } else {
            count--;
        }

        setCount(count);
    }

    function nextImage(){

        if (count === pictures.length -1) {
            count = 0;
        } else {
            count++;
        }
        
        setCount(count);
    }
    
    return (

        <div className="carrousel">

            { hasImages && 
 
                <FontAwesomeIcon 
                    icon={faChevronUp}
                    className="carrousel__buttonLeft"
                    onClick={() => prevImage()}
                />

            }

            <img 
                className="carrousel__image"
                src={pictures[count]} 
                alt="visuel de l'annonce"
            />

            { hasImages &&  <span className="carrousel__value">{count + 1} / {pictures.length}</span> }

            { hasImages && 
                <FontAwesomeIcon 
                    icon={faChevronUp}
                    className="carrousel__buttonRight"
                    onClick={() => nextImage()}
                />
            }

        </div>

    )

}

export default Carrousel