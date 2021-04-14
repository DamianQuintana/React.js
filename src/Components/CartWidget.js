import logo from './Image/CartWidgetLogo.jpg'
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import CartShower from './CartShower';

import {getFirestore} from '../configs/firebase'
import { useEffect } from "react";


export default function CartWidget(){

    /////LOGICA PARA COMPRADOR ==============================
    const db = getFirestore();

    const [buyer, setBuyer] = useState([]); //Esto tiene que ser un objeo literal del producto 

    // function create(){  
    //     const compra = db.collection("COMPRA");
    //     const newCompra = {
    //         user: {id: "1", nombre: "Pedri", email: "pedropedro@gmail.com"}
    //     }
    // }
    const date = "13/04/2021";   
    const context = useContext(CartContext);
    const [checkOut, setCheck] = useState(1);

    useEffect(() =>{
  
        //COMPRADOR
        const buyerList = db.collection('Buyer');
        const order = ([]);
        buyerList.get().then((querySnapshot) =>{
          if(querySnapshot.size == 0){
            console.log("Sin datos para mostrar");
          }else{
            setBuyer(querySnapshot.docs.map(doc => doc.data()))
            console.log("comprador");
            console.log(buyer);
            console.log("CARRITO");
            querySnapshot.docs.map((p) => console.log({id: p.id, date: date,  ...p.data(), items: context.cart, total: checkOut})); //Obtengo el id unico del objeto, que ya esta seteado de antemano 
          }
        }).catch((error) => console.log(error))
      }, [])
    
     
    /////LOGICA PARA COMPRADOR ==============================

 

    // const algo = {
    //     objeto: {context}
    // };
 
    // console.log(algo);


    
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