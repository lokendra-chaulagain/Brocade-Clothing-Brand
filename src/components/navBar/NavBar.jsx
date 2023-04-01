import React, { useState, useEffect } from "react";
import { TbMenu } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import style from "../../../styles/nav.module.css";
import Image from "next/image";
import Cart from "./Cart";
import Link from "next/link";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const NavBar = () => {
  // for changing nav color
  const [color, setColor] = useState("black");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (router.pathname != "/") {
      setColor(`black`);
    } else {
      setColor("transparent");
    }

    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor(`black`);
      } else {
        router.pathname == "/" && setColor("transparent");
        router.pathname != "/" && setColor("black");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, [router.query]);

  return (
    <nav
      className="navbar py-1 py-sm-2 py-md-3 py-lg-4 header_print"
      style={{
        position: "fixed",
        zIndex: "5",
        width: "100vw",
        background: `${color}`,
        transition: `all 0.8s ease 0s`,
      }}>
      <div className="container">
        <Link
          className="navbar-brand"
          href="/">
          <Image
            // src={process.env.NEXT_PUBLIC_API_URL + "/" + props.logo}
            alt="Brocode Logo"
            width={60}
            height={60}
            className="d-inline-block align-text-top"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div className="d-flex gap-4 align-items-center">
          <div className="d-flex flex-row focus-false">
            <Cart />
          </div>
          <div className="dropdown d-flex justify-content-center align-items-center">
            <label
              className=""
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <BsPersonCircle
                color="white"
                size={25}
              />
            </label>

            <ul
              className="dropdown-menu mt-3 rounded-0"
              style={{ left: "-70px" }}>
              <>
                <li>
                  <Link href="/account">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/account/">
                    <a className="dropdown-item">Order History</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="dropdown-item">Logout</a>
                  </Link>
                </li>
              </>

              <>
                <li>
                  <Link href="/login">
                    <a className="dropdown-item">Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a className="dropdown-item">Register</a>
                  </Link>
                </li>
              </>
            </ul>
          </div>
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
                size={30}
              />
            </span>
          </button>
          <div
            className="offcanvas offcanvas-end ps-3"
            tabIndex="-1"
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li
                  className={`${style.list} nav-item`}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <Link
                    href={{
                      pathname: `/store/[url]/`,
                    }}>
                    <a className="text-decoration-none">
                      <span className="myLink">djsdbshsdbdhs</span>
                    </a>
                  </Link>
                </li>
                <hr />
                {/* <span>{menuItems[0].title}</span> */}
                <li
                  className="mb-1"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <Link href="/contact">
                    <a className="myLink">Contact Us</a>
                  </Link>
                </li>
                <li
                  className="mb-1"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <Link href="/ourpolicy">
                    <a className="myLink">Privacy policy</a>
                  </Link>
                </li>
                <li
                  className="mb-1"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <Link href="/login">
                    <a className="myLink">Accounts</a>
                  </Link>
                </li>
                <li
                  className="mb-1"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  Features
                </li>
                <li
                  className="mb-1"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <Link href="/blog">
                    <a className="text-dark text-decoration-none">Blog</a>
                  </Link>
                </li>
              </ul>
              <Link href="/exclusive">
                <button className="myBtn w-100 mt-3">Exclusive</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
