import { useState } from "react";
import "../../styles/components/Collapse.scss";

function Collapse(){

    let [isOpen, setIsOpen] = useState(false);

    return isOpen ? (

        <div className="collapse">

            <div className="collapseBar">

                <p className="collapseBar__title">Titre</p>

                <button className="collapseBar__button"
                onClick={() => setIsOpen(false)}
                >
                    T
                
                </button>

            </div>

            <div className="collapse__content">

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

    ) : (

        <div className="collapseClose">

            <p className="collapseClose__title">Titre</p>

            <button className="collapseClose__button"
            onClick={() => setIsOpen(true)}
            >
                T

            </button>

        </div>

    )

}

export default Collapse;