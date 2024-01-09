import { useState } from "react";
import "../../styles/components/Collapse.scss";

function Collapse({title, content}){

    let [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return (

        <div className="collapse">

            <div className="collapseBar">

                <h2 className="collapseBar__title">{title}</h2>

                <button onClick={handleClick} 
                className={isOpen ? "collapseBar__button collapseBar__button--over" 
                : "collapseBar__button"}
                >
                    T
                
                </button>

            </div>

            <div className={isOpen ? "collapse__content  collapse__content--over" 
            : "collapse__content"}>

                <div className="contentWrapper">

                    <p>
                        {content}
                    </p>

                </div>

            </div>

        </div>

    )

}

export default Collapse;