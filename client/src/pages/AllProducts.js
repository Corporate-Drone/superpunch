import React, {useState} from 'react'

import Product from '../components/Product'
import './_AllProducts.scss'

function AllProducts() {
    const [displayProducts, setDisplayProducts] = useState('All Products');
    const handleClick = (type) => setDisplayProducts(type);

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
                <div className="AllProducts-Products-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="AllProducts-Products-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="AllProducts-Products-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="AllProducts-Products-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>

        </div>
    )
}

export default AllProducts
