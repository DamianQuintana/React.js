import React from "react";
import { useEfect, useState } from "react";
import CartContext from "../CartContext";
import { useContext } from "react";

const ItemCount = ({ init, stock, item, id, title, price, pictureURL, category}) => {
    const { cart, setCart } = useContext(CartContext);
    const context = useContext(CartContext);
    const [counter, setCounter] = useState(init);
    const [compra, terminarCompra] = useState("No termino la compra todavia");
    const oneItem = [
        {
            id: item.id,
            title: item.title,
            price: item.price,
            stock: counter,
            pictureURL: item.pictureURL,
            category: item.category,
            total: counter*item.price,

        }
    ]
    console.log("SINGLE ITEM");
    console.log(oneItem[0].id);
    // const oneItem = {id, title, price, pictureURL, category};
    const buyThis = () => {
        if (counter > 0) {
            setCart([...cart, 
            ...oneItem]) //Enviamos la cantidad de cada item que compramos 
        }
        else {
            alert("No selecciono cantidad");
        }
    }
    const handleApp = () => {
        if (counter < item.stock) {
            setCounter(counter + 1);
        }
        else {
            alert("No queda mas stock para agregar");
        }
    }
    const handleSubtract = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
        else {
            alert("No podes restar mas items");
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setCounter(e.target.value);
    }
    const changeComponent = () => {
        if (counter > 0)
            terminarCompra("Terminar compra agregar:  " + counter + " items al carrito");
        else
            terminarCompra("No termino la compra todavia");

    }


    return (
        <>
            <h1>STOCK <span>{stock - counter}</span></h1>
            <button onClick={handleApp}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <input type = {Number} value={counter} onChange={e => handleChange(e)}></input>
            <button onClick={changeComponent}>Agregar al carrito</button>
            <br />
            <button onClick={buyThis}>{compra}</button>
        </>
    );
}

export default ItemCount;



