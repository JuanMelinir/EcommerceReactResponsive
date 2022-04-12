import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
//TODO Contador para incrementar o decrementar la cantidad de un item o producto
const ItemCount=({stock,initial,onAdd})=>{

    const [counter,setCounter]=useState(0);

    const increment=()=>{
        //TODO incrementa la cantidad de items
        if(counter<stock){
            setCounter(counter+1);
        }
    }    

    const decrement=()=>{
        //TODO disminuye la cantidad de items
        if(counter>initial){
            setCounter(counter-1);
        }
    } 

    useEffect(()=>{
    console.log();
    },[counter]);
    
    return(
<div className="form">
  <div className="input-group-prepend contador">
    <button className="btn btn-outline-primary" type="button" onClick={decrement}>-</button>
    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value={counter}></input>
    <button className="btn btn-outline-primary" type="button" onClick={increment}>+</button>
  </div>
 
  { //TODO según el stock y la cantidad de item requerida hace diferentes acciones
      stock && counter
      ? <button className="btn btn-danger" type="button" onClick={()=>onAdd(counter)}>Agregar al carrito</button>
      : <button className="btn btn-danger" type="button" disabled>Agregar al carrito</button>
  }
</div>
    );
}
export default ItemCount;