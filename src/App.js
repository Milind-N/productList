import React from 'react';
import ProductList from './ProductList';

function App() {
  const products = [{name: 'iphone', brand: 'Apple'}, {name: 'LED TV', brand: 'LG'}, {name: 'Dishwasher', brand: 'Bosch'}];
  return (
    <div className="App">
      <header className="App-header">
        Product List
      </header>
      <ProductList products={products} />
    </div>
  );
}

export default App;
