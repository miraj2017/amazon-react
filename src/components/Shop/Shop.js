import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newcart = [...cart, product]
        setCart(newcart)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">


                    {
                        products.map(p => <Product product={p} handleAddProduct={handleAddProduct}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shop;