import React from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  // Replace this with your actual product data
  const products = [
    {
      id: 1,
      name: 'Condenser Fan Motor',
      price: 29.99,
      description: 'Description of Spare Part 1',
      imageUrl: 'https://sdapplianceco.com/wp-content/uploads/2014/11/new_condenser_fan_motor_installed.jpg',
    },
    {
      id: 2,
      name: 'Spare Part 2',
      price: 39.99,
      description: 'Description of Spare Part 2',
      imageUrl: 'https://images.ctfassets.net/fpe0ec7r30ix/7pLCHr4JWQA9UhLGpIX2at/62e8ff42d74ef56f7522d0c3312c70f8/RG-REF-replace-refrigerator-water-valve-s4a-remove-screw.jpg',
    },
    {
      id: 3,
      name: 'Condenser Fan Motor',
      price: 29.99,
      description: 'Description of Spare Part 1',
      imageUrl: 'https://sdapplianceco.com/wp-content/uploads/2014/11/new_condenser_fan_motor_installed.jpg',
    },
    {
      id: 4,
      name: 'Spare Part 2',
      price: 39.99,
      description: 'Description of Spare Part 2',
      imageUrl: 'https://images.ctfassets.net/fpe0ec7r30ix/7pLCHr4JWQA9UhLGpIX2at/62e8ff42d74ef56f7522d0c3312c70f8/RG-REF-replace-refrigerator-water-valve-s4a-remove-screw.jpg',
    },
    // Add more products here...
  ];

  return (
    <div className="product-page">
      <h1 style={{textAlign:"center",marginBottom:"40px",fontSize:"2.5rem"}}>Spare Parts</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img style={{height:"50%",width:"80%"}} src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <span>${product.price}</span><br/>
            <Link to="/payment"><button>Buy Now</button></Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ProductPage;
