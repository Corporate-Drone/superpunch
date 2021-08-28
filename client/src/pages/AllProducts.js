import React, { useState, useEffect } from 'react'

import Product from '../components/Product'
import './_AllProducts.scss'

function AllProducts() {
    const [displayProducts, setDisplayProducts] = useState('All Products');
    const [loadedProducts, setLoadedProducts] = useState([]);
    const handleClick = (type) => setDisplayProducts(type);

    const dummyProducts = [
        {
            name: 'Glove1',
            description: 'Glove for boxing. ',
            image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
            category: 'Boxing Gloves',
            price: 85.00,
            rating: 4,
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
            <Product name={product.name} image={product.image} category={product.category} price={product.price} rating={product.rating} />
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

        </div>
    )
}

export default AllProducts
