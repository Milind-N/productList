import React from 'react';

function Product(props) {
    return (
        <li key={props.product.name}>
            <div>Name: {props.product.name}</div>
        </li>
    )
}

export default Product;