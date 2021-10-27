import Rating from './Rating'

type Product = {
    name: string
    category: string,
    image: string,
    price: number,
    brand: string,
    rating: number,
    numReviews: number,
    description: string
}

type ProductProps = {
    _id: string
    product: Product
}

export default function Product(props:ProductProps) {
    return(
        <div key={props._id} className="card">
            <a href={`/products/${props._id}`}>
                <img className="medium" src="./images/p1.jpg" alt="product"/>
            </a>
            <div className="card-body">
                <a href={`/product/${props._id}`}>
                    <h2>{props.product.name}</h2>
                </a>
                <Rating  rating={props.product.rating} numReviews={props.product.numReviews}></Rating>
                <div className="price">
                {props.product.price}
                </div>
            </div>
        </div>
    )
}
