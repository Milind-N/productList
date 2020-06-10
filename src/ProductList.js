import React from 'react';
import Product from './Product';

function ProductList(props) {
    const products = props.products;
    return (
        <ul>
        {products.map((product) => <Product product={product} />)}
        </ul>
    );
}

export default ProductList;