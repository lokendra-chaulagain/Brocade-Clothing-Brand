import cartContext from "./cartContext"
import { useState, useEffect } from "react";

function CartitemState(props) {
const [items, setitems] = useState();
const [CartTotal, setCartTotal] = useState(0);

useEffect(() => {
  setitems(JSON.parse(localStorage.getItem('cartItem')))
  getTotal()
}, [])

const updateCart=(items)=>{
  setitems(items);
  getTotal();

  // eslint-disable-next-line
}

const updateCartQty=(qty,product_id)=>{
  let item=items.find((item)=>item.product_id==product_id)
  if (item) {
    item.qty=qty;
  }
  localStorage.setItem('cartItem',JSON.stringify(items))
  setitems(items);
  getTotal();
  
  // eslint-disable-next-line
}


const removeCartItem=(product_id)=>{
  let newitem=items.filter((item)=>item.product_id!=product_id)
  localStorage.setItem('cartItem',JSON.stringify(newitem))
  setitems(newitem);
  getTotal();
}

const getTotal=async()=>{
  let sum=0;
let allitem=JSON.parse(localStorage.getItem('cartItem'));
await allitem&&allitem.forEach((value)=>{
  sum += (parseInt(value.price)*parseInt(value.qty));
 });
  setCartTotal(sum);
}
    return (
     <cartContext.Provider value={{items:items,updateCart:updateCart,updateCartQty:updateCartQty,removeCartItem:removeCartItem,cartTotal:CartTotal}}>
        {props.children}
      </cartContext.Provider>
    );
  }

  export default CartitemState;