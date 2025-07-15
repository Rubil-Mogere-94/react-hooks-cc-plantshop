import React, { useState } from 'react';

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name,
      image,
      price, // Keep as string for test compatibility
    };
    addPlant(newPlant);
    // Reset form
    setName('');
    setImage('');
    setPrice('');
  };

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Plant name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input 
        type="text" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;