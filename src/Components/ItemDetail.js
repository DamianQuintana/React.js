import ItemDetailContainer from "./ItemDetailContainer";
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import { useParams } from "react-router";

export default function ItemDetail({oneItem}){
console.log("Item que llega " + oneItem);
    return(
        <div id = "hero" style = {{color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingTop: "300px"}}>
        <h1>Componente ItemDETAIL</h1>
      <ul><li>ID: {oneItem.id}</li>
      <img  style = {{maxWidth: "120px"}}src = {oneItem.pictureURL}></img>
      <li>Producto: {oneItem.title}</li>
      <li>PRECIO: {oneItem.price}´</li>
      <li><button>TOCAME</button></li>
      </ul>
          </div>
    );
}