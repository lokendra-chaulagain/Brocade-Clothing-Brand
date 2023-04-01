import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import { useRouter } from "next/router";
import Order from "./partials/order";
import Shipping_address from "./partials/shipping_address";
import Product_detail from "./partials/product_detail";

const Show = (props) => {
  const [obj, setObj] = useState({});

  let router = useRouter();
  let CallApi = new Api();

  // if (!props.token) {
  //     setTimeout(() => {
  //         router.push('/')
  //     }, 100);
  // }

  // use effect for every router value changes
  useEffect(() => {
    router.query.id && fetchData();
  }, [router.query.id]);

  //fetching edit data
  let fetchData = async () => {
    let data = await CallApi.fetchData(`order/view/${router.query.id}`);
    data.order.length > 0 && setObj({ ...data });
  };

  return (
    <>
      <div className="container  paddingTop">
        <h2 className="py-2 px-3 bg-dark text-left text-white mb-2 custom-fs-22">Order Detail of order ID :- {router.query.id}</h2>
        <div className="row">
          {obj.order && <Order order={obj.order} />}

          {obj.shippng_detail && <Shipping_address shippng_detail={obj.shippng_detail} />}
          {obj.order_detail && <Product_detail order_detail={obj.order_detail} />}
        </div>
      </div>
    </>
  );
};
export default Show;
