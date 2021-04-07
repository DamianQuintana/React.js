import logo from './Image/CartWidgetLogo.jpg'
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Item from './Item'
import CartShower from './CartShower';
export default function CartWidget(){
    const context = useContext(CartContext);
    {console.log("CART DEL WIDGET");}
    {console.log(context.cart[0])}
    // console.log(context.cart[0].id); //Acá estamos recibiendo el contexto 
    return(
        <div id = "hero">
            <h1> CARRITO COMPRADO <span>HASTA AHORA</span></h1>
            <img id = "cartLogo"src = {logo}></img>
            <br/>
            {context.cart.map((x)=> <CartShower item= {x}/> )}
        </div>
    );
}