import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {firestoreFechOne} from "../utils/firestoreFech";


 //TODO: Según el item seleccionado a partir de mi idItem por parámetro lo busco en firebase
const ItemDetailContainer =()=>{
const [item,setItem]=useState({});
const {idItem}=useParams();
console.log(idItem);
 //TODO: busco mi item en firebase
useEffect(()=>{
    firestoreFechOne(idItem)
    .then(result=>setItem(result))
    .catch(error=>console.log(error))
   
},[]);
    return(
     <ItemDetail item={item}/>
    );
}
export default ItemDetailContainer;