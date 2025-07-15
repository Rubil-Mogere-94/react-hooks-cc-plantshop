import React from 'react';
import Plant from './Plant';

function PlantList({ plants, toggleStockStatus }) {
  return (
    <div className="plant-list">
      {plants.map(plant => (
        <Plant 
          key={plant.id}
          plant={plant} 
          toggleStockStatus={toggleStockStatus} 
        />
      ))}
    </div>
  );
}

export default PlantList;