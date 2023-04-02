import React from "react";
import Cart from "./Cart";
import Link from "next/link";
import RightMenu from "../RightMenu";
import UserHead from "./UserHead";

const NavBar = () => {
  return (
    <nav className="navbar bg-black position-fixed w-100 py-4 z_999">
      <div className="container">
        <Link href="/">
          <p className="h2 text-white cp">Brocade</p>
        </Link>
        <div className="d-flex gap-4 align-items-center">
          <div className="d-flex flex-row focus-false">
            <Cart />
          </div>

          <UserHead />
          <RightMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
