import React from 'react';
import "./product.css"

const Product = (props) => {
    // console.log(props.product) 
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product ">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller} </small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon </small></p>
                <button className="button" onClick={() => { props.handleAddProduct(props.product) }}>Add to cart</button>
            </div>
        </div>

    );
};

export default Product;