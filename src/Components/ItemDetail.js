// import ItemDetailContainer from "./ItemDetailContainer";
// import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
// import { useParams } from "react-router";

// export default function ItemDetail({id}){
// console.log("Item detail");
// console.log(id);
//     return(
//         <>
//       <ul>
//           <li>ID: {id}</li>
//       </ul>
//       </>
//     );
// }


import Example from './ItemCount';
import React, { useState } from 'react';
import ItemList from './ItemList';
import PropGreeting from './PropGreeting';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { products } from './Products'
import ItemDetailContainer from './ItemDetailContainer';

function ItemDetail() {
  const [items, setItems] = useState([]); //Esto tiene que ser un objeo literal del producto 
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    new Promise((right, wrong) => {
      
      setTimeout(() => {
        if(id){
          right(products.filter(x => x.id == id))
        }
        right(items);
      }, 5000);

    }).then(solved => setItems(solved))
  });

  console.log(items);
  return (
    <div id="hero">
        <ul></ul>
    </div>
  );

} export default ItemDetail;
