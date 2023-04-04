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
    <div className="card border-0 mb-3 ">
      <div className="row border pe-2">
        <div className="col-4 ">
          <Image
            src={demo}
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
              <div className="price d-flex gap-3 small">
                <p className="text-muted p-0">Price</p>
                <p className="p-0">7447</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 mt-2">
          <AiOutlineDelete
            className="cp"
            onClick={handleItemRemove}
            size={18}
            color="red"
          />
        </div>
      </div>
    </div>
  );
}
