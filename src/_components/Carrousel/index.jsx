import { useState } from "react";

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

            <div className="btn">

                { hasImages && 
    
                    <i 
                        className="fa fa-chevron-up carrousel__buttonLeft"
                        onClick={() => prevImage()}
                    ></i>

                }

                { hasImages && 
                    <i 
                        className="fa fa-chevron-up carrousel__buttonRight"
                        onClick={() => nextImage()}
                    ></i>
                }

            </div>

            <img 
                className="carrousel__image"
                src={pictures[count]} 
                alt="visuel de l'annonce"
            />

            { hasImages &&  <span className="carrousel__value">{count + 1} / {pictures.length}</span> }

        </div>

    )

}

export default Carrousel