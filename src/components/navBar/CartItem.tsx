import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import products from "../../data/products.json";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function CartItem() {
  const handleItemRemove = () => {
    toast.success("Items Remove Success");
  };

  const image = products[0].image;

  return (
    <div className="card border-0 mb-3 ">
      <div className="row border pe-2">
        <div className="col-4 ">
          <Image
            src={image}
            width={80}
            height={80}
            objectFit="scale-down"
            alt="img"
          />
        </div>
        <div className="col-7 ps-0">
          <div className="card-body p-2">
            <p className="card-title mb-0">Bomber Jacket</p>
            <div className="details f-flex flex-column">
              <div className="qty d-flex gap-3 align-items-center">
                <p className="text-muted small p-0">Qty</p>
                <AiOutlineMinus className="cursor-pointer" />
                <span className="">
                  <strong>5</strong>
                </span>
                <AiOutlinePlus className="cursor-pointer" />
              </div>
              <div className="price d-flex gap-3 small">
                <p className="text-muted p-0">Price</p>
                <p className="p-0">7447</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 mt-2">
          <AiOutlineDelete
            className="cursor-pointer"
            onClick={handleItemRemove}
            size={18}
            color="red"
          />
        </div>
      </div>
    </div>
  );
}
