import React, { useState } from "react";
import Image from 'next/image'
import { AiOutlineDelete } from 'react-icons/ai'


const Cartitemcard = (props) => {
  return (
    <div className="card border-0 mb-3" style={{ maxWidth: "540px" }}>
      <div className="row">
        <div className="col-4">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL+'/'+props.cartitem.image}
            width={100}
            height="100%"
            objectFit="cover"
            layout="responsive"
            className="img-fluid"
            alt={props.cartitem.name}
          />
        </div>
        <div className="col-7 ps-0">
          <div className="card-body p-2">
            <h5 className="card-title mb-0">{props.cartitem.name}</h5>
            <div className="details f-flex flex-column">
              <div className="qty d-flex gap-3 align-items-center">
                <small className="text-muted p-0">Qty</small>
                <button
                  className="ghostBtn p-0"
                  onClick={props.decrement}
                  product_id={props.cartitem.product_id}
                  qty={props.cartitem.qty}
                  disabled={props.iscouponapplied}

                   
                >
                  -
                </button>
                <span className="">
                  <strong>{props.cartitem.qty}</strong>
                </span>
                <button
                  className="ghostBtn p-0"
                  onClick={props.increment}
                  product_id={props.cartitem.product_id}
                  qty={props.cartitem.qty}
                 disabled={props.iscouponapplied}
                >
                  +
                </button>
              </div>
              <div className="price d-flex gap-3">
                <small className="text-muted p-0">Price</small>
                <span className="p-0">{props.cartitem.price * props.cartitem.qty}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 mt-2">
          <AiOutlineDelete size={24} color='red' style={{ cursor: 'pointer' }} onClick={props.removeItem} 
                  product_id={props.cartitem.product_id}
          
          />
        </div>
      </div>
    </div>
  );
};

export default Cartitemcard;
