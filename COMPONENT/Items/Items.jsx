import React from 'react';
import './Items.css'; // Ensure the path to the CSS file is correct

export default function Items(props) {
  return (
    <div className='item'>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rs {props.new_price}
        </div>
        {props.old_price && (
          <div className="item-price-old">
            Rs {props.old_price}
          </div>
        )}
      </div>
    </div>
  );
}