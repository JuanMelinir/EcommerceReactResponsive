import {Link} from ReactDOM;
import carouselDetail from "./carouselDetail";
const itemDetail=()=>{

return(
    <>

    <div className="container-fluid">
        {
        <div className="detailsContainer">
        <div className="itemContainer">
        <h5 className="textPrice">{item.title}</h5>
        <img src={item.pictureUrl} alt={item.title}/>
        <h5 className="textPrice">Código artículo: {item.id}</h5>
        
         {/*si la cantidad de items es 0 preparo el contador para agregar items, sino aparece el botón checkear compra*/
             itemCount===0
             ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
             : <Link to='/cart' style={{textDecoration:"none"}}><button className="btn btn-dark" type="button">Checkear compra</button></Link>
        }
        </div>
        {/*Muestro la descripción de un item*/}        
        <div className="itemDetailContainer">
        <h6 className="textDescription">{item.description}</h6>
        <h3 className="textPrice">$ {item.price}</h3>
        </div>
      </div>    
         }
      </div>

);
}
export default ItemDetail;