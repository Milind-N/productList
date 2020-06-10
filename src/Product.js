import React from 'react';

function Product(props) {
    return (
        <li key={props.product.name}>
            <div>Name: {props.product.name}</div>
            <div>Brand: {props.product.brand}</div>
        </li>
    )
}

export default Product;