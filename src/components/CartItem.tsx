import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import demo from "../assets/banner-1.webp";
import { toast } from "react-toastify";

export default function CartItem() {
  const handleItemRemove = () => {
    toast.success("Items Remove Success");
  };

  return (
    <div className="card border-0 mb-3">
      <div className="row">
        <div className="col-4">
          <Image
            src={demo}
            width={100}
            height="100%"
            objectFit="cover"
            alt="img"
          />
        </div>
        <div className="col-7 ps-0">
          <div className="card-body p-2">
            <h5 className="card-title mb-0">Bomber Jacket</h5>
            <div className="details f-flex flex-column">
              <div className="qty d-flex gap-3 align-items-center">
                <small className="text-muted p-0">Qty</small>
                <button
                  type="button"
                  className="ghostBtn p-0">
                  -
                </button>
                <span className="">
                  <strong>5</strong>
                </span>
                <button
                  type="button"
                  className="ghostBtn p-0">
                  +
                </button>
              </div>
              <div className="price d-flex gap-3">
                <small className="text-muted p-0">Price</small>
                <span className="p-0">7447</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 mt-2">
          <AiOutlineDelete
            className="cp"
            onClick={handleItemRemove}
            size={24}
            color="red"
          />
        </div>
      </div>
    </div>
  );
}
