import SingleProduct from "../../components/products/SingleProduct";
import Suggested from "../../components/products/Suggested";
import React, { useState, useEffect, useContext } from "react";
import ProductItem from "../../components/products/ProductItem";
import { useRouter } from "next/router";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import CartitemContext from "../../services/context/cartContext";

const productId = () => {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [sizeid, setSizeid] = useState();
  const [colorid, setColorid] = useState();
  const [selectedcolor, setSelectedcolor] = useState();
  const [selectedsize, setSelectedsize] = useState();
  const [availableqty, setAvailableQty] = useState();
  const [isColorclicked, setisColorclicked] = useState(false);


  let cartItems = useContext(CartitemContext);

  let CallApi = new Api();

  let router = useRouter();

  let UpdateSizeValue = async (e) => {
    setSizeid(e.target.id);
    let size_price = await size.filter((ele) =>
      ele._id == e.target.id ? ele : null
    );
    setPrice(size_price[0].price);
    setSelectedsize(size_price[0].name);
  };

  let UpdateColorValue = async (e) => {
    let cls= document.querySelectorAll('.carousel-item');
    console.log(cls)
  cls.forEach((ele)=>{
ele.classList.remove('active')
  })
document.getElementsByClassName('first_carousel')[0].classList.add('active')

    setColorid(e.target.id);
    window.scroll({ top: 20 });
    let thumb = color.filter((ele) => (ele._id == e.target.id ? ele : null));
    setThumbnail(thumb[0].thumbnail);
    setSelectedcolor(thumb[0].name);

  };

  // store to cart
  let CartHandler = async (e) => {
    let data = {
      product_id: product._id,
      image: product.thumbnail,
      color_id: colorid,
      size_id: sizeid,
      color: selectedcolor,
      size: selectedsize,
      name: product.name,
      price: price,
      qty: 1,
    };

    let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

    let item = cartItem.find((item) => item.product_id == product._id);
    refetch();

    if (item) {
      if (item.qty >= availableqty) {
        toast.warning(`Only ${availableqty} available in stock`);
        return false;
      }
      item.qty = item.qty + 1;
      toast.success("Item quantity updated");
    } else {
      cartItem.push(data);
      toast.success("Item added to cart");
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    cartItems.updateCart(cartItem);
    // document.getElementById('cartoffcanvasNavbar').classList.add('d-inline-block')
  };

  useEffect(() => {
    fetchProduct();
  }, [router.query.url]);

  let refetch = async () => {
    let res = await CallApi.fetchData(`product/${router.query.url}`);
    res && setAvailableQty(res.product.qty);
  };

  let fetchProduct = async () => {
    let res = await CallApi.fetchData(`product/${router.query.url}`);
    res && setProduct(res.product);
    res && setSize(res.size);
    res && setColor(res.color);
    res &&
      setPrice(
        res.product.offer_price ? res.product.offer_price : res.product.price
      );
    res && setThumbnail(res.product.thumbnail);
    res && setAvailableQty(res.product.qty);
  };

  return (
    <div className=''>
      {product && (
        <SingleProduct
          data={{
            product: product,
            size: size,
            color: color,
            UpdateSizeValue: UpdateSizeValue,
            UpdateColorValue: UpdateColorValue,
            isColorclicked:isColorclicked,
            price: price,
            thumbnail: thumbnail,
            CartHandler: CartHandler,
            colorid: colorid,
            sizeid: sizeid,
          }}
        />
      )}

      {product && <Suggested category={product.category_id} />}
    </div>
  )
}

export default productId;
