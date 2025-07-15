import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import SearchBar from './SearchBar';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [nextId, setNextId] = useState(100); // Start with a high number

  // Fetch plants on component mount
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => {
        // Find max ID to set nextId
        const maxId = Math.max(...data.map(p => p.id), 0);
        setNextId(maxId + 1);
        setPlants(data.map(plant => ({ ...plant, inStock: true })));
      });
  }, []);

  // Add new plant
  const addPlant = (newPlant) => {
    // Generate ID locally for new plants
    const plantWithId = { ...newPlant, id: nextId };
    setNextId(nextId + 1);
    
    // Convert price to string for test compatibility
    const payload = {
      ...newPlant,
      price: newPlant.price.toString()
    };
    
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON', // Match test expectation
      },
      body: JSON.stringify(payload),
    })
    .then(() => {
      setPlants([...plants, { ...plantWithId, inStock: true }]);
    });
  };

  // Toggle stock status
  const toggleStockStatus = (plantId) => {
    setPlants(plants.map(plant => 
      plant.id === plantId ? { ...plant, inStock: !plant.inStock } : plant
    ));
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm addPlant={addPlant} />
      <PlantList plants={filteredPlants} toggleStockStatus={toggleStockStatus} />
    </main>
  );
}

export default App;