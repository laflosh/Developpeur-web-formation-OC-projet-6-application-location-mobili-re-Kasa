import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import "../../styles/components/Collapsable.scss";

function Collapsable({title, content}){

    let [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return (

        <div className="collapsable">

            <div className="title" onClick={handleClick} >
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronUp} className={ "icon " + (isOpen ? "icon-over" : "") } />
            </div>

            <div className={"content " + (isOpen ? "content-over" : "")}>
                <div>
                    {content}
                </div>
            </div>

        </div>

    )

}

export default Collapsable;