import {createContext,useState } from 'react';

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cartList,setCartList]=useState([]);
    const [totalI,setTotalI]=useState(0);
    //TODO: agrega al carrito un item o actualiza su cantidad
    const addToCart=(item,amount)=>{
        let found=cartList.find(elem=>elem.id===item.id)
        //TODO: si no encuentra el item agrega uno nuevo
        if(found===undefined){
            setCartList([
                ...cartList,{
                id:item.id,
                title:item.title,
                pictureUrl:item.pictureUrl,
                price:item.price,
                quantityItems:amount
            }]);
        }else{
            //TODO: si lo encuentra actualiza su cantidad
            found.quantityItems+=amount;
        }
    };
    //TODO: remueve un item a partir de su id
    const removeItem=(id)=>{
    setCartList(cartList.filter((cartItem)=>cartItem.id!==id));
    let found=cartList.find((cartItem)=>cartItem.id===id)
    setTotalI(totalI-found.quantityItems);
    };
    //TODO: nos dice si se encuentra un item a partir de su id
    const isInCart=(id)=>{
    return cartList.find((cartItem)=>cartItem.id===id)
    };
    //TODO: elimina todos los elementos del carrito
    const clear=()=>{
    setCartList([]);
    setTotalI(0);
    };
    //TODO: nos da la cantidad de items total
    const  calculateAmountItems=(valor)=>{
        setTotalI(totalI+valor);  
}
    const totalCost=cartList.map(elem => elem.price*elem.quantityItems);  
    const total=totalCost.reduce((a, b) => a + b, 0)-totalCost.reduce((a, b) => a + b, 0)*0.1;

    return (
    //TODO acá tengo todo lo que puedo importar desde el cartcontext
<CartContext.Provider value={{cartList,addToCart,removeItem,isInCart,clear, calculateAmountItems,totalI,setTotalI,totalCost,total}}>
{children}
</CartContext.Provider>
    );
}
export default CartContextProvider;