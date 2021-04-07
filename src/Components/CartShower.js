import { Link } from 'react-router-dom';


function CartShower({ item }) {
  return (
    < div id ="hero">
      <ul id = "hero" style={{ color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px" }}>
        <img style={{ maxWidth: "120px" }} src={item.pictureURL}></img>
        <li><h1>Producto:<span> {item.title}</span></h1></li>
        <li><h1>Precio unitario: <span>${item.price}</span></h1></li>
        <li><h1>Stock agregado: <span>{item.stock}</span></h1></li>
      </ul>
    </div>
  );
} export default CartShower;
