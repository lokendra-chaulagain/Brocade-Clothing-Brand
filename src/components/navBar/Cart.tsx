import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import CartItem from "../CartItem";

const Cart = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="no_selection">
      <button
        className="border-0 p-0 btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbarCart"
        aria-controls="offcanvasNavbarCart"
        onClick={toggleMenu}>
        <span className="">
          <BsCartDash
            color="white"
            size={30}
          />{" "}
        </span>
      </button>

      <div
        className="offcanvas offcanvas-start ps-3"
        id="offcanvasNavbarCart"
        aria-labelledby="offcanvasNavbarCartLabel">
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="offcanvasNavbarCartLabel">
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <hr />
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li>
              <CartItem />{" "}
            </li>

            <li>
              <CartItem />{" "}
            </li>
          </ul>
        </div>

        <Link href="/checkout">
          <div className="button">
            <button
              type="button"
              className="global_black_button mb-3 w-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close">
              CHECK OUT
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
