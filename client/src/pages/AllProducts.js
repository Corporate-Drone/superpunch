import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import Loader from '../components/uiElements/Loader';
import { getProducts, resetProduct } from '../actions/products';
import './_AllProducts.scss'

function AllProducts() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const product = useSelector(state => state.products.product)
    const loading = useSelector(state => state.products.loading)

    const [displayProducts, setDisplayProducts] = useState('All Products');
    const [loadedProducts, setLoadedProducts] = useState([]);;
    const handleClick = (type) => setDisplayProducts(type);

    useEffect(() => {
        dispatch(getProducts())

        if (product) {
            dispatch(resetProduct())
        }
    },[])

    useEffect(() => {
        let displayedProducts = [];
        products.forEach((product) => {
            if (product.category === displayProducts) {
                displayedProducts.push(product)
            } else if (displayProducts === 'All Products'){
                displayedProducts.push(product)
            }
        })
        setLoadedProducts(displayedProducts)
    },[displayProducts, products])

    let fetchedProducts;
    if (loadedProducts) {
        fetchedProducts = loadedProducts.map(product => (
            <Product name={product.name} image={product.image} category={product.category} price={product.price} rating={product.rating} id={product._id} key={product._id} />
        ))
    }


    return (
        <div className="AllProducts">
            {!loading && <div className="AllProducts-types">
                <div className="AllProducts-types-display">
                    Shop/<br />
                    {displayProducts}
                </div>
                <ul>
                    <li className="hover-underline-animation" onClick={() => handleClick('All Products')}>All Products</li>
                    <li className="hover-underline-animation" onClick={() => handleClick('Boxing Gloves')}>Boxing Gloves</li>
                    <li className="hover-underline-animation" onClick={() => handleClick('MMA Gloves')}>MMA Gloves</li>
                    <li className="hover-underline-animation" onClick={() => handleClick('Bag Gloves')}>Bag Gloves</li>
                    <li className="hover-underline-animation" onClick={() => handleClick('Wraps')}>Wraps</li>
                </ul>
            </div>}
            {!loading && <div className="AllProducts-Products">
                <div className="AllProducts-Products-row">{fetchedProducts}</div>
            </div>}
            {loading && <Loader/>}
        </div>
    )
}

export default AllProducts
