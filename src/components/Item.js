import {Link} from 'react-router-dom'

const Item =(props)=>{
    return(
<div className="itemContainer">
    <div className="percentageContainer"> <h3 className='textPercentage'>-10% </h3></div>
    <div className="titleContainer"><h5 className='title'>{props.title}</h5></div>
    <h5>{props.idCategory}</h5>
    <h5>{props.description}</h5>
    <img src={props.pictureUrl} alt={props.title}/>
   <div className="priceContainer"><h3 className="textLittle">Antes </h3><h3 className="textPriceBefore">{props.price}|</h3><h3 className="textLittle">Ahora </h3><h3 className='textPrice'>{props.price-0.1*props.price}</h3></div> 
    <button type="button" className="btn btn-outline-secondary" id="btnDetails"><h6 className="text">Detalles</h6></button>
    <h6>Stock disponible {props.stock}</h6>
</div>
);
}
export default Item;