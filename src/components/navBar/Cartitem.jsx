import React, { useState, useEffect, useContext } from "react";
import Cartitemcard from "./CartItemcard";
import CartitemContext from "../../services/context/cartContext";
import Api from "../../services/Api";
import { toast } from "react-toastify";

const CartItem = (props) => {
  const [Isupdated, setIsupdated] = useState(0);
  const [availableqty, setAvailableQty] = useState();
  let CallApi = new Api();

  let cartItems = useContext(CartitemContext);
  let data = cartItems.items;
  let count=0;
  data&&data.map((ele)=>{
    return count=count+ele.qty
  })
  props.setCartno&&  props.setCartno(data?count:0)

  const increment = (e) => {

    let product_id = e.target.getAttribute("product_id");
    refetch(product_id);
    let qty = e.target.getAttribute("qty");
    if (qty >= availableqty) {
      toast.warning(`Only ${availableqty} available in stock`);
      return false;
    }else{
      cartItems.updateCartQty(parseInt(qty) + 1, product_id);
      setIsupdated(1);
    }
   
  };

  const decrement = (e) => {
    let product_id = e.target.getAttribute("product_id");
    let qty = e.target.getAttribute("qty");
    if (parseInt(qty) == 1) {
      return false;
    }
    cartItems.updateCartQty(parseInt(qty) - 1, product_id);
    setIsupdated(1);
  };


// remove cart from item 
  const removeItem = (e) => {
    let product_id = e.target.getAttribute("product_id");
 cartItems.removeCartItem(product_id);
 toast.success(`Item remove from cart`);

    setIsupdated(1);
  };

  // refetch stock qty 
  let refetch = async (id) => {
    let res = await CallApi.fetchData(`product/${id}`);
    res && setAvailableQty(res.product.qty);
  };

  useEffect(() => {
    data = cartItems.items;
    setIsupdated(0);
  }, [Isupdated]);

  return (
    <>
      {data &&
        data.map((index) => {
          return (
            <Cartitemcard
              cartitem={index}
              key={Math.random()}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}

            />
          );
        })}
      {!data && <h2 className="h6">Empty Cart</h2>}
    </>
  );
};

export default CartItem;
