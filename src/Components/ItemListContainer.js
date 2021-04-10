import Example from './ItemCount';
import React, { useState } from 'react';
import ItemList from './ItemList';
import PropGreeting from './PropGreeting';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { products } from './Products'
import ItemDetailContainer from './ItemDetailContainer';
import {getFirestore} from '../configs/firebase'

function ItemListContainer() {
  const [items, setItems] = useState([]); //Esto tiene que ser un objeo literal del producto 
  const { id } = useParams();

  // useEffect(() => {
  //   new Promise((right, wrong) => {
      
  //     setTimeout(() => {
  //       if(id){
  //         right(products.filter(x => x.category == id))
  //       }
  //       right(products);
  //     }, 1);

  //   }).then(solved => setItems(solved))
  // });


  useEffect(() =>{
    const db = getFirestore();
    const productsList = db.collection('Products');
    productsList.get().then((resp) =>{
      if(resp.size == 0){
        console.log("Sin datos para mostrar");
      }else{
        resp.docs.map((p) => console.log(p));
      }
    }).catch((error) => console.log(error))
  }, [])

  return (
    <div id = "hero">
      <PropGreeting greeting="Bienvenido a la sección del ItemListContainer" buySome="Dentro de poco vamos a tener los productos cargados" />
      <ItemList items={items} />
    </div>
  );

} export default ItemListContainer;
