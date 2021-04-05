import { useEffect } from "react";
import { useParams } from "react-router";
import { products } from "./Products";
import React, { useState } from 'react';
import ItemDetail from './ItemDetail'
export default function ItemDetailContainer (){
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    console.log("ID container detail " + id);
    useEffect(()=>{
        new Promise((right, wrong) =>{
            if(id){
                right(products.filter(a => a.id == id));
            }
            right(products);

        }).then(solved => {setDetail(solved)})

    }, [id])

    const [clothDetail] = detail; //Saco el objeto del array 
    console.log(products);
    console.log(detail);
    console.log(clothDetail);
    return(
        <div>
            <ItemDetail oneItem = {clothDetail}/>
        </div>
    );
}
   
