import React, { useState, useEffect } from "react";
import ProductItem from "../../components/products/ProductItem";
import { useRouter } from "next/router";
import Api from "../../services/Api";
import InfiniteScroll from 'react-infinite-scroll-component';
const StoreId = () => {
  const [products, setProduct] = useState([]);
  const [page, setpage] = useState(0)
  const [totalproduct, settotalProduct] = useState(1)

  let CallApi = new Api();

  let router = useRouter();
  useEffect(() => {
    fetchProduct();
  }, [router.query.url]);

  let fetchProduct = async () => {
    let res = await CallApi.fetchData(`store/${router.query.url}?page=1`);
    res&& console.log(res)
    res&&setProduct(res.product);
    res && setpage(2);
    res&& settotalProduct(res.product_length)

  };

  
  const fetchData = async () => {
    let res = await CallApi.fetchData(`store/${router.query.url}?page=${page}`);
    res&&  setProduct(products.concat(res.product));
    res&&setpage(page+1);
  };

  return (
    <>
    <InfiniteScroll
  dataLength={products.length} //This is important field to render the next data
  next={fetchData}
  hasMore={products.length>=totalproduct?false:true}
  loader={<h5 className="text-secondary">Loading...</h5>}
  // endMessage={
  //   <p style={{ textAlign: 'center' }}>
  //     {/* <b>No more product</b> */}
  //   </p>
  // }
className=""
>
      <div className="container paddingTop">
        <div>
          <div className="row">
          
            {products &&
              products.map((product) => {
                return <ProductItem product={product} key={Math.random()} />;
              })}

          </div>
        </div>
      </div>
</InfiniteScroll>

    </>
  );
};

export default StoreId;
