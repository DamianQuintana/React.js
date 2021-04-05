import React, {useState} from 'react';


function PropGreeting({greeting, buySome}){
    const [actualStock, setStock ] = useState(10);
    const restarStock = (newStock) => setStock((actualStock) => actualStock-newStock)
    const sumarStock = (newStock) => setStock((actualStock) => actualStock+newStock)
    return(
            <div>
              <h1 style ={{padding: "40px"}}>{greeting} <p><span>{buySome}</span></p></h1>
            </div>
    );
}

export default PropGreeting;
