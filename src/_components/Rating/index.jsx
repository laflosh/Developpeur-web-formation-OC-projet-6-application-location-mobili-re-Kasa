
function Rating(props){

    let note = props.rating;
    let rates = [];

    for(let i = 0; i < props.nbStar;i++){

        rates.push(

            <i 
            key={i}
            className={"fa fa-star " + (rates.length < note ?"starRating" : "starRating-grey")}
            ></i>

        )

    }

    return(
        <>
            {rates}
        </>
 
    )

}

export default Rating;