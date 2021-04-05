import React from "react";
import {useEfect, useState} from "react";
import CartContext from "../CartContext";
import {useContext} from "react";

const ItemCount = ({init, stock, onAdd, item} ) =>{
    const {cart} = useContext(CartContext);

    const [counter, setCounter] = useState(init);
    const [compra, terminarCompra] = useState("No termino la compra todavia");
    const handleApp = () =>{
        if(counter <item.stock){
            setCounter(counter +1);
        }
        else{
            alert("No queda mas stock");
        }
    }

    const handleSubtract = () =>{
        if(counter>=1){
            setCounter(counter -1);
        }
        else{
            alert("No queda mas para restar");
        }
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setCounter(e.target.value);
    }
    const changeComponent = () =>{
        if(counter>0)
        terminarCompra("Terminar compra agregar:  " +counter + " items al carrito");
        else
        terminarCompra("No termino la compra todavia");

    }

    return(
        <div id ="hero">
            <h1>STOCK <span>{stock - counter}</span></h1>
            <button onClick ={handleApp}>+1</button>
            <button onClick ={handleSubtract}>-1</button>
            {/* <button onSubmit ={ e=> onAdd(e, counter)}> */}
            <input value = {counter} onChange ={e =>handleChange(e)}></input>
            <button onClick= {e=> onAdd(e, counter), changeComponent}>AGREGAR AL CARRITO</button>
            <br/>
            <button>{compra}</button>
            {/* <button onClick={changeComponent}>CAMBIAR</button> */}
        </div>
    );
}

export  default ItemCount;



