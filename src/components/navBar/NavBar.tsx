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
import logo from "../../assets/logo/logo-3.webp";
import RightMenu from "../RightMenu";

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
          {/* <Image
            src={logo}
            alt="Brocode Logo"
            width={120}
            height={120}
            objectFit="scale-down"
            className="d-inline-block align-text-top"
            style={{ cursor: "pointer" }}
          /> */}
          <p className="h3 text-white">Brocade </p>
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

          <RightMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
