import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating(props){

    let note = props.rating;
    let rates = [];

    for(let i = 0; i < props.nbStar;i++){

        rates.push(

            <FontAwesomeIcon 
            key={i}
            icon={faStar}
            className={rates.length < note ?"starRating" : "starRating-grey"}
            />

        )

    }

    return(
        <>
            {rates}
        </>
 
    )

}

export default Rating;