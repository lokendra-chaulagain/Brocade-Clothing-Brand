import React, { useState } from "react";
import Cart from "./Cart";
import Link from "next/link";
import RightMenu from "./RightMenu";
import UserHead from "./UserHead";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

const NavBar = () => {
  const [mode, setMode] = useState("dark");

  const selectDarkMode = () => {
    setMode("dark");
  };

  const selectLightMode = () => {
    setMode("light");
  };

  console.log(mode)
  return (
    <nav className="navbar bg-black position-fixed w-100 py-3 z_999 no_selection">
      <div className="container">
        <Link href="/">
          <p className="h2 text-white cursor-pointer">Brocade</p>
        </Link>
        <div className="d-flex gap-4 align-items-center ">
          <div>
            {mode == "dark" && (
              <BsFillSunFill
                onClick={selectLightMode}
                color="white"
                size={20}
                className="cursor-pointer"
              />
            )}
            {mode == "light" && (
              <IoMdMoon
                onClick={selectDarkMode}
                color="white"
                size={20}
                className="cursor-pointer"
              />
            )}
          </div>

          <Link
            passHref
            legacyBehavior
            href={"/custom"}>
            <p className="h6 color_white cursor-pointer d-none d-sm-block">Customization</p>
          </Link>

          <Link
            passHref
            legacyBehavior
            href={"/lunching"}>
            <p className="h6 color_white cursor-pointer d-none d-sm-block">Booking</p>
          </Link>


          
          <Link
            passHref
            legacyBehavior
            href={"/collection"}>
            <p className="h6 color_white cursor-pointer d-none d-sm-block">Collection</p>
          </Link>

          <Link
            passHref
            legacyBehavior
            href={"/exclusive"}>
            <p className="h6 color_white cursor-pointer d-none d-sm-block">Exclusive</p>
          </Link>

          <Link
            passHref
            legacyBehavior
            href={"/shop"}>
            <p className="h6 color_white cursor-pointer d-none d-sm-block">Shop</p>
          </Link>

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
