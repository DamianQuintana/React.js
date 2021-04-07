import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function item({ item }) {
  return (
    < >
      <ul id ="hero" style={{ color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px" }}>
        <img style={{ maxWidth: "120px" }} src={item.pictureURL}></img>
        <li><h1>Producto:<span> {item.title}</span></h1></li>
        <li><h1>PRECIO: <span>${item.price}</span></h1></li>
        <li><h1>STOCK DISPONIBLE: <span>{item.stock}</span></h1></li>
        <li id ="thisAnchor"><Link to={`/ItemDetailContainer/${item.id}`} >VER DETALLE</Link></li>
      </ul>
    </>
  );
} export default item;
