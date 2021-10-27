interface product{
    _id: string;
    name: string;
    category: string;
    image: string;
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    description: string;
    countInStock: number;
}
const products: product[] = [
    {
        _id: '1',
        name: 'Black Forest',
        category: 'Cakes',
        image: '../images/p1.jpg',
        price: 350,
        brand: '',
        rating: 4.5,
        numReviews: 10,
        description: 'Best Quality Cake',
        countInStock:10
    },
    {
        _id: '2',
        name: 'Black Forest',
        category: 'Cakes',
        image: './images/p1.jpg',
        price: 300,
        brand: '',
        rating: 4,
        numReviews: 10,
        description: 'Best Quality Cake',
        countInStock:20
    },
    {
        _id: '3',
        name: 'Black Forest',
        category: 'Cakes',
        image: './images/p1.jpg',
        price: 370,
        brand: '',
        rating: 4.5,
        numReviews: 10,
        description: 'Best Quality Cake',
        countInStock:0
    },
    {
        _id: '4',
        name: 'Black Forest',
        category: 'Cakes',
        image: './images/p1.jpg',
        price: 400,
        brand: '',
        rating: 5,
        numReviews: 10,
        description: 'Best Quality Cake',
        countInStock:15
    },
    {
        _id: '5',
        name: 'Black Forest',
        category: 'Cakes',
        image: './images/p1.jpg',
        price: 420,
        brand: '',
        rating: 4.5,
        numReviews: 10,
        description: 'Best Quality Cake',
        countInStock:5
    },
    {
        _id: '6',
        name: 'Black Forest',
        category: 'Cakes',
        image: './images/p1.jpg',
        price: 380,
        brand: '',
        rating: 4,
        numReviews: 10,
        description: 'Best Quality Cake',
        countInStock:5
    },

]
export {
    products
}