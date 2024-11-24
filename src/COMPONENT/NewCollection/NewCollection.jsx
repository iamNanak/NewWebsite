import React from 'react';
import './NewCollection.css';
import new_collection from '../Assets/new_collections'; // Adjust the path to go back one level to Assets
import Items from '../Items/Items'; // Adjusted path to point to Items component

export default function NewCollection() {
  return (
    <div className="new-collections">
      <h1> NEW COLLECTION </h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}