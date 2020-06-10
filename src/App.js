import React from 'react';
import ProductList from './ProductList';

function App() {
  const products = [{name: 'iphone'}, {name: 'LED TV'}, {name: 'Dishwasher'}];
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
