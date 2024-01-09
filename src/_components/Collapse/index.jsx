import { useState } from "react";
import "../../styles/components/Collapse.scss";

function Collapse(){

    let [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return (

        <div className="collapse">

            <div className="collapseBar">

                <h2 className="collapseBar__title">Titre</h2>

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum
                    </p>

                </div>

            </div>

        </div>

    )

}

export default Collapse;