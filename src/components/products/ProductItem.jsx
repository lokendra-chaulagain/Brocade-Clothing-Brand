
import React,{useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../../../styles/product.module.css";

const Product = (props) => {
  let product = props.product;
const [image, setimage] = useState(product.thumbnail?`${process.env.NEXT_PUBLIC_API_URL}/${product.thumbnail}`:'');

let changeImgae=async(e)=>{
  let src=e.target.getAttribute('src');
  setimage(src)
  console.log(src)
}

let loadbackthumbnail=async(e)=>{
  let src=e.target.getAttribute('back');
  setimage(src)
}


  return (
    <div className="col-md-3 col-sm-6 col-6">
    
      <div className="card-group h-100">
        <div className={`${style.mycard} ${style.hoverEffect} cursor-pointer card border-0 mb-4`}>
        <Link
        href={{
          pathname: "/product/[url]",
          query: { url: product.url },
        }}>
          <Image
            src={image}
            alt={product.title}
            className={`${style.myImg} h-100 img-fluid rounded-0`}
            objectFit="cover"
            layout="intrinsic"
            quality={0}
            height="270px"
            width="100%"
            onMouseOver={loadbackthumbnail}
            onMouseOut={(e)=>setimage(`${process.env.NEXT_PUBLIC_API_URL}/${product.thumbnail}`)}

            back={product.backimage?`${process.env.NEXT_PUBLIC_API_URL}/${product.backimage}`:image}
            unoptimized={true}
            loading="eager"
          />
      </Link>

          <div className={`card-body text-center`}>
            <h1 className="h6 text-uppercase fw-bold">{product.name}</h1>
            <span>
              <strong>NPRS </strong>
              {
                product.offer_price &&
                <>
                  {product.offer_price}
                  &nbsp;<s> {product.price}</s>

                </>
              }

              {
                !product.offer_price &&
                product.price

              }
            </span>

            <h3 className=" custom-fs-16 mt-1 text-secondary text-uppercase custom-fw-800">{product.color&&product.color.length!=0 && product.color.length + ' COLORS'}</h3>

            {product.color&&
            <div className=" d-flex gap-3 mt-2 justify-content-center">
              {product.color.map((image, index) => (
                <>

                  <button
                    key={index}
                    className={`${style.hoverButton} p-3`}
                    onMouseOver={changeImgae}
            back={product.backimage?`${process.env.NEXT_PUBLIC_API_URL}/${product.thumbnail}`:image}

                    onMouseOut={loadbackthumbnail}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${image.thumbnail}`}
                    style={{ backgroundColor: `${image.name}` }}></button>
                </>
              ))}
            </div>
}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;