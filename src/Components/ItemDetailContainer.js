// import { useEffect } from "react";
// import { useParams } from "react-router";
// import { products } from "./Products";
// import React, { useState } from 'react';
// import ItemDetail from './ItemDetail'
// export default function ItemDetailContainer (){
//     const [detail, setDetail] = useState([{}]);
//     const {id} = useParams();
//     // console.log("CONTAINER");
//     // console.log(products);
//     // console.log("ID container detail " + id);
//     useEffect(()=>{
//         new Promise((right, wrong) =>{
//             if(id){
//                 right(products.filter(a => a.id == id));
//             }
//         }).then(solved => {setDetail(solved)})
//     }, [id])
//     // console.log("DETALLE");
//     // console.log(detail);
//     // const [clothDetail] = detail; //Saco el objeto del array 
//     // console.log("Detalle");
//     // console.log(clothDetail);
//     console.log("detail container");
//     console.log(detail);
//     console.log(id);


//     return(
//         <div>
//             <ItemDetail/>
//         </div>
//     );
// }
   
import { useEffect } from "react";
import { useParams } from "react-router";
import { products } from "./Products";
import React, { useState } from 'react';
import ItemDetail from './ItemDetail'
import DetailList from './DetailList'
export default function ItemDetailContainer (){
    const [detail, setDetail] = useState([{}]);
    const {id} = useParams();
    useEffect(()=>{
        new Promise((right, wrong) =>{
            if(id){
                right(products.filter(a => a.id == id));
            }
        }).then(solved => {setDetail(solved)})
    }, [id])
    return(
        <div>
            <DetailList details = {detail}/>
        </div>
    );
}
   
