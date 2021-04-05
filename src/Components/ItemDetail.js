import ItemDetailContainer from "./ItemDetailContainer";
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import { useParams } from "react-router";

export default function ItemDetail({oneItem}){
console.log(oneItem);
    return(
        <>
      <ul>
          <li>ID: {oneItem.title}</li>
          {console.log(oneItem.title)}
      </ul>
      </>
    );
}
