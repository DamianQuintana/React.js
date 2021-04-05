import {useContext, useEffect, useState} from "react";
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import CartContext from "../CartContext";
function Item({item}){
 //CONTEXTO DEL CARRITO 
 const {cart, setCart} = useContext(CartContext);
 const context = useContext(CartContext);
 const unItem = [
  {
      id: item.id,
      title: item.title,
      price: item.price,
      stock: item.stock,
      pictureURL: item.pictureURL,
      category: item.category
  }
]
// console.log(cart); 
// console.log(context);
  //console.log("item "+ item.id);

  const onAdd = (e, counter) =>{
    alert("Se agregaron al carrito " +counter +" elementos");
    {item.stock = item.stock - counter}
    console.log("Se agrego al carrito");
  }
  
  const buyThis = () =>{
    // setCart(["cart"]);
    setCart([...cart, unItem]);
  }
// console.log("ITEM");
// console.log(item.id);
// console.log(item);
  return(
<div id = "hero" style = {{color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px"}}>
  <h1>Componente Item</h1>
<ul><li>ID: {item.id}</li>
<img  style = {{maxWidth: "120px"}}src = {item.pictureURL}></img>
<li>Producto: {item.title}</li>
<li>PRECIO: {item.price}</li>
<li><button onClick = {buyThis}>COMPRAR</button></li> 
{/* BOTON NUEVO DE PRUEBA */}
<li><Link to = {`/ItemDetailContainer/${item.id}`} >VER DETALLE</Link></li>
{/* <li><Link to = "/CartContext">TOCAME</Link></li> */}
{/* <li><button><CartContext/></button></li> */}
<li><ItemCount init = {0} stock ={item.stock} onAdd = {onAdd} item = {item}/></li> 
{/* <Route exact path = "/item/:id"><ItemDetailContainer details = {item}/></Route> */}
  );
</ul>
    </div>
  );
}
export default Item;
