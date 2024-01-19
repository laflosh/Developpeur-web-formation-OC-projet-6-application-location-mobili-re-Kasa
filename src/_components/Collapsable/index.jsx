import { useState } from "react";

function Collapsable({title, content}){

    let [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return (

        <div className="collapsable">

            <div className="collapsable__title" onClick={handleClick} >
                <h2>{title}</h2>
                <i className={ "fa fa-chevron-up icon " + (isOpen ? "icon--over" : "") }></i>
            </div>

            <div className={"collapsable__content " + (isOpen ? "collapsable__content--over" : "")}>

                {typeof content === "string" ? (

                <div>
                    {content}
                </div>
                ) : (
                    <ul>
                        {content.map((content,index) =>

                            <li key={index}>
                                {content}
                            </li>
                        )}
                    </ul>
                )}  

            </div>

        </div>

    )

}

export default Collapsable;