import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapsable({title, content}){

    let [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return (

        <div className="collapsable">

            <div className="collapsable__title" onClick={handleClick} >
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronUp} className={ "icon " + (isOpen ? "icon--over" : "") } />
            </div>

            <div className={"collapsable__content " + (isOpen ? "collapsable__content--over" : "")}>
                <div>
                    {content}
                </div>
            </div>

        </div>

    )

}

export default Collapsable;