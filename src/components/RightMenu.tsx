import Link from "next/link";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";

export default function RightMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="no_selection">
      <button
        className="border-0 p-0 btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        onClick={toggleMenu}>
        <span className="">
          <TbMenu
            color="white"
            size={25}
          />{" "}
        </span>
      </button>

      <div
        className="offcanvas offcanvas-end ps-3"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <hr />

          <div className="d-flex flex-column gap-2 ">
            <Link href={"/"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Home
              </p>
            </Link>

            <Link href={"/shop"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Shop
              </p>
            </Link>

            <Link href={"/exclusive"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Exclusive
              </p>
            </Link>

            <Link href={"/custom"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Customization
              </p>
            </Link>

            <Link href={"/lunching"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Lunching Soon
              </p>
            </Link>

            <Link href={"/contact"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Contact
              </p>
            </Link>

            <Link href={"/blog"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Blog
              </p>
            </Link>

            <Link href={"/about"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                About us
              </p>
            </Link>

            <hr className="mb-0" />
            <Link href={"/profile"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Profile
              </p>
            </Link>

            <Link href={"/login"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Login
              </p>
            </Link>

            <Link href={"/register"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Register
              </p>
            </Link>

            <hr className="mt-0" />

            <Link href={"/privacy-policy"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Privacy Policy
              </p>
            </Link>

            <Link href={"/terms-conditions"}>
              <p
                className="cursor-pointer hover_underline"
                data-bs-dismiss="offcanvas">
                Terms and Conditions
              </p>
            </Link>
          </div>

          <Link href="/exclusive">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              className="global_black_button w-100 mt-3">
              Exclusive
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
