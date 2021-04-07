import Example from './ItemCount';
import React, { useState } from 'react';
import ItemList from './ItemList';
import PropGreeting from './PropGreeting';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { products } from './Products'
import ItemDetailContainer from './ItemDetailContainer';

function ItemListContainer() {
  const [items, setItems] = useState([]); //Esto tiene que ser un objeo literal del producto 
  const { id } = useParams();

  useEffect(() => {
    new Promise((right, wrong) => {
      
      setTimeout(() => {
        if(id){
          right(products.filter(x => x.category == id))
        }
        right(products);
      }, 1);

    }).then(solved => setItems(solved))
  });

  return (
    <div id = "hero">
      <PropGreeting greeting="Bienvenido a la sección del ItemListContainer" buySome="Dentro de poco vamos a tener los productos cargados" />
      <ItemList items={items} />
    </div>
  );

} export default ItemListContainer;
