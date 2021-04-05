// // import React, {useContext} from "react";
// // const CartContext = React.createContext("Soy el cart context");
// // export default CartContext;
// export default function CartContext(){
//         console.log("CONTEXT")
//     return(
//         <div id ="hero">
//         <h1>TITULO</h1>
//         HOLIS
//         </div>
//     );
// }

import { createContext } from "react";


const CartContext = createContext();
export default CartContext;