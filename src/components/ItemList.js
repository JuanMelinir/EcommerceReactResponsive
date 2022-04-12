import Item from "./Item";

const ItemList = ({items}) =>{

return(
    <>
    {
    items.length > 0
    ? items.map(item=><Item key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} stock={item.stock}/>)
    :<div className="spinnerContainer"><p><span className="spinner-grow text-danger"></span></p></div>
    }
    </>
);
}
export default ItemList;