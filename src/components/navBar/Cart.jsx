import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import CartItem from "./Cartitem";

const Cart = () => {
  const [Cartno, setCartno] = useState(0)
  return (
    <div>
      <button
        className="border-0 p-0 btn position-relative"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cartoffcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="">
          <BsCartDash color="white" size={25} />
          <span class="position-absolute translate-middle badge rounded-pill bg-danger" style={{ left: '25px', top: '5px' }}>{Cartno}</span>
        </span>
      </button>
      <div
        className="offcanvas offcanvas-start px-3"
        tabIndex="-1"
        id="cartoffcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartoffcanvasNavbarLabel">
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
            <hr />
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li><CartItem setCartno={setCartno}/></li>
          </ul>
        </div>
        <Link href='/checkout'>
          <div className="button">
            <button className="global_black_button mb-3 w-100" data-bs-dismiss="offcanvas" aria-label="Close">cHeCk OuT</button>
          </div>
          </Link>
      </div>
    </div>
  );
};

export default Cart;
