import React from 'react';
import ProductList from '../components/ProductList';
import product1Img from '../assets/product1.webp';
import product2Img from '../assets/product2.webp';
import product3Img from '../assets/product3.webp';
import product4Img from '../assets/product4.webp';


const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 499,
    image: product1Img,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 799,
    image: product2Img,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 1299,
    image: product3Img,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 999,
    image: product4Img,
  },
];

function Home() {
  return (
    <div>
      <h1>Welcome to Our E-Commerce Store</h1>
      <h2>Featured Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;