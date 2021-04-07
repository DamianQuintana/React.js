import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function ItemDetail({ details }) {
  return (
    <div id="hero" style={{ color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px" }}>
      <ul id="thisAnchor">
        <li><ItemCount init={0} stock={details.stock} item={details} /></li>
        <img style={{ maxWidth: "120px" }} src={details.pictureURL}></img>
        <li><h1>Producto:<span> {details.title}</span></h1></li>
        <li><h1>PRECIO: <span>${details.price}</span></h1></li>
        <li><h1>STOCK DISPONIBLE: <span>{details.stock}</span></h1></li>
        <li><Link to="/ItemListContainer">Volver a productos</Link></li>
        <br />
        <li><Link to="/category/Remeras">Volver a remeras</Link></li>
      </ul>
    </div>
  );
} export default ItemDetail;

