import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

function ItemDetail({ details }) {
  return (
    <div id="hero" style={{ color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px" }}>
      <ul id ="thisAnchor">
        <img style={{ maxWidth: "120px" }} src={details.pictureURL}></img>
        <li>Producto: {details.title}</li>
      
        <li>PRECIO: {details.price}</li>
        <li><Link to = "/ItemListContainer">Volver a productos</Link></li>
        <br/>
        <li><Link to = "/category/Remeras">Volver a remeras</Link></li>
        <li><ItemCount init={0} stock={details.stock} item={details} /></li>
      </ul>
    </div>
  );
} export default ItemDetail;
