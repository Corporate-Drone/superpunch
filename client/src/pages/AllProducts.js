import React, { useState, useEffect } from 'react'

import Product from '../components/Product'
import Loader from '../components/uiElements/Loader';
import './_AllProducts.scss'

function AllProducts() {
    const [displayProducts, setDisplayProducts] = useState('All Products');
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleClick = (type) => setDisplayProducts(type);

    const dummyProducts = [
        {
            name: 'Glove1',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 85.00,
            rating: 4,
            id:'806d52d4cd744eeaaa26857d43f8bd4d',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove2',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'MMA Gloves',
            price: 50.00,
            rating: 3,
            id: 'f1f599796ad7434aad88327f295595dc',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove3',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 99.00,
            rating: 3,
            id: 'ed9ca15a9765478b928413db34d19d90',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },        {
            name: 'Glove4',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Bag Gloves',
            price: 99.00,
            rating: 3,
            id: '6e86f5a71a3d4f6692c7df08549669e7',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove5',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 99.00,
            rating: 3,
            id: '64aeeeccee6241569b5a67b0b7131864',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove6',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Wraps',
            price: 30.00,
            rating: 3,
            id: '250e0e0cc16b4c5587277c918c0fec22',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove7',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 85.00,
            rating: 4,
            id: 'b48d9e942afb42768d1aec80541637e7',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove8',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'MMA Gloves',
            price: 50.00,
            rating: 3,
            id: '84dee3971f1f4ba9a2680a2d51a791cf',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove9',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 99.00,
            rating: 3,
            id: 'ad0aa88af3d341609094dc5d2b6e3452',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },        {
            name: 'Glove10',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Bag Gloves',
            price: 99.00,
            rating: 3,
            id: 'b45943a658ac4f9aa5054251cdc21bf1',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove11',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 99.00,
            rating: 3,
            id: 'c8a6fbd9b0694800a35bf2a82b895a29',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        },
        {
            name: 'Glove12',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Wraps',
            price: 30.00,
            rating: 3,
            id: 'd0aa3821b9ed45d0a2ce4c899e560c8d',
            reviews: [
                {
                    username: 'React',
                    body: 'https://reactjs.org/',
                    rating: 3
                }
            ]
        }
    ]

    useEffect(() => {
        let displayedProducts = [];
        dummyProducts.forEach((product) => {
            if (product.category === displayProducts) {
                displayedProducts.push(product)
            } else if (displayProducts === 'All Products'){
                displayedProducts.push(product)
            }
        })
        setLoadedProducts(displayedProducts)
    },[displayProducts])

    let fetchedProducts;
    if (loadedProducts) {
        fetchedProducts = loadedProducts.map(product => (
            <Product name={product.name} image={product.image} category={product.category} price={product.price} rating={product.rating} id={product.id} key={product.id} />
        ))
    }


    return (
        <div className="AllProducts">
            <div className="AllProducts-types">
                <div className="AllProducts-types-display">
                    Shop/<br />
                    {displayProducts}
                </div>
                <ul>
                    <li onClick={() => handleClick('All Products')}>All Products</li>
                    <li onClick={() => handleClick('Boxing Gloves')}>Boxing Gloves</li>
                    <li onClick={() => handleClick('MMA Gloves')}>MMA Gloves</li>
                    <li onClick={() => handleClick('Bag Gloves')}>Bag Gloves</li>
                    <li onClick={() => handleClick('Wraps')}>Wraps</li>
                </ul>
            </div>
            <div className="AllProducts-Products">
                <div className="AllProducts-Products-row">{fetchedProducts}</div>
            </div>
            {/* {loading && <Loader/>} */}
        </div>
    )
}

export default AllProducts
