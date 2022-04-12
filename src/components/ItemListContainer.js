import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {firestoreFech} from "../utils/firestoreFech";

const ItemListContainer =()=>{

    const [items,setItems]=useState([]);
    const {idCategory}=useParams();
    useEffect(()=>{
        firestoreFech(idCategory)
        .then(result=>setItems(result))
        .catch(error=>console.log(error))
    },[idCategory]);
    console.log(items)
    return(
        <>
        <div className="itemsContainer">
        <ItemList items={items}/>
        </div>
        </>
    );
}
export default ItemListContainer;