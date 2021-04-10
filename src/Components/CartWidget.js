import logo from './Image/CartWidgetLogo.jpg'
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import CartShower from './CartShower';
export default function CartWidget(){
    const context = useContext(CartContext);
    {console.log("CART DEL WIDGET");}
    {console.log(context.cart[0].id)}
    const [checkOut, setCheck] = useState(1);
    // const wawa = 0;
    // function awa(){
    //         setCheck(context.cart[0].price *context.cart[0].stock);
    // }

    
    const precio = () => {
        if(checkOut == 1){
            for(let i=0; i<(context.cart.length); i++){
                let counter = 0;
                setCheck(counter =+ context.cart[i].price * context.cart[i].stock);
                console.log("contador");
            }

        }
    }
    
//como PUEDO LEVANTAR LOS DATOS PARA MULTIPLICAR STOCK POR ITEMS Y OBTENER PRECIO TOTAL

    // console.log(context.cart[0].id); //Acá estamos recibiendo el contexto 
    return(
        <div id = "hero">
            <h1> CARRITO COMPRADO <span>HASTA AHORA {context.cart.length}</span></h1>
            <h1>GASTADO HASTA AHORA {checkOut}</h1>
            <img id = "cartLogo"src = {logo}></img>
            <br/>
            {context.cart.map((x)=> <CartShower item= {x}/> )}
            <button onClick={precio()}>VER PRECIO</button>
        </div>
    );
}