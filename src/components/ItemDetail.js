import {Link} from 'react-router-dom';
import tradeMark from '../assets/logoinsiders.png'


const ItemDetail=({item})=>{

return(
    <>

    <div className="container-fluid">
        {
        <div className="detailsContainer">
        <div className="itemContainer">
        <h5 className="textPrice">{item.title}</h5>
        <img src={item.pictureUrl} alt={item.title}/>
        <h5 className="textPrice">Código artículo: {item.id}</h5>

        </div>
        {/*Muestro la descripción de un item*/}        
        <div className="itemDetailContainer">
        <h6 className="textDescription">{item.description}</h6>
        <h3 className="textPrice">$ {item.price}</h3>
        </div>
      </div>    
         }
      </div>
</>
);
}
export default ItemDetail;