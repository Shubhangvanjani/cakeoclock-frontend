type RatingProps = {
    rating: number | undefined
    numReviews:number | undefined
}
export default function Ratings(props:RatingProps){
    return(
        <div className="rating">
            {
                // props.rating !== undefined?
                <div>
                    <span> <i className={props.rating! >=1 ? "fa fa-star": props.rating! >=0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>
                    <span> <i className={props.rating! >=2 ? "fa fa-star": props.rating! >=1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>
                    <span> <i className={props.rating! >=3 ? "fa fa-star": props.rating! >=2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>
                    <span> <i className={props.rating! >=4 ? "fa fa-star": props.rating! >=3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>
                    <span> <i className={props.rating! >=5 ? "fa fa-star": props.rating! >=4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>
                    <span>{props.numReviews + ' reviews'}</span>
                </div>
                // :
                // <div></div>
            }
        </div>
    )
}