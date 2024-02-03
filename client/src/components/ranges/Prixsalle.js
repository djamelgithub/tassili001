import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 

 
  const Prixsalle = ({priciosala}) => {
    const [prixsallee, setPrixsalle] = useState([ 0, 303]);

    return (
      <div className='card'>
        <label>
        Sélectionnez le prix:
          <Slider
            min={0}
            max={300}
            step={5}
            range
            value={prixsallee}
            onChange={(newRange) => {
              setPrixsalle(newRange);
              priciosala(newRange); // Llama a la función proporcionada por el prop
            }}
            trackStyle={{ backgroundColor: '#EB2B00', height: 10 }}
            handleStyle={{
              borderColor: '#007bff',
              height: 20,
              width: 20,
              marginLeft: -10,
              marginTop: -5,
              backgroundColor: '#007bff',
            }}
            railStyle={{ backgroundColor: '#ccc', height: 10 }}
          />
  
          <div style={{ marginTop: 10 }}>
          Prix: De {prixsallee[0]} à {prixsallee[1]}
          </div>
        </label>
      </div>
    );
  };
  
  export default Prixsalle
  