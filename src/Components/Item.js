import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function item({ item }) {
  return (
    < >
      <ul id ="hero" style={{ color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px" }}>
        <img style={{ maxWidth: "120px" }} src={item.pictureURL}></img>
        <li><p>Producto: {item.title}</p></li>
        <li><p>PRECIO: ${item.price}</p></li>
        <li><p>STOCK DISPONIBLE: {item.stock}</p></li>
        <li id ="thisAnchor"><Link to={`/ItemDetailContainer/${item.id}`} >VER DETALLE</Link></li>
        {/* <li><ItemCount init={0} stock={item.stock} item={item} /></li> */}
      </ul>
    </>
  );
} export default item;
