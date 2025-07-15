import React from 'react';

function Plant({ plant, toggleStockStatus }) {
  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button 
        onClick={() => toggleStockStatus(plant.id)}
        className={plant.inStock ? 'in-stock' : 'out-of-stock'}
      >
        {plant.inStock ? 'In Stock' : 'Out of Stock'}
      </button>
    </div>
  );
}

export default Plant;