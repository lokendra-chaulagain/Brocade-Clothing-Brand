import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function FooterRightSide() {
  return (
    <div className="mt-2 d-flex flex-column align-items-center">
      <ul className="p-0 d-flex gap-3">
        <Link
          href={"/"}
          target="_blank"
          className="cursor-pointer"
          passHref>
          <a
            className="cursor-pointer text-dark"
            target="_blank">
            <FaFacebookSquare />
          </a>
        </Link>

        <Link
          href={"/"}
          target="_blank"
          className="cursor-pointer"
          passHref>
          <a
            className="cursor-pointer text-dark"
            target="_blank">
            <AiOutlineInstagram />
          </a>
        </Link>

        <Link href={""}>
          <a
            className="cursor-pointer text-dark"
            target="_blank">
            <FaTiktok />
          </a>
        </Link>

        <Link href={""}>
          <a
            className="cursor-pointer text-dark"
            target="_blank">
            <ImYoutube />
          </a>
        </Link>
      </ul>

      {/* =============== */}
      <ul className="d-flex p-0 align-items-center custom-fs-11 gap-2 ">
        <li>
          <Link href="/custom">
            <a className="text-dark text-decoration-none ">Customization</a>
          </Link>
        </li>

        <li>
          <Link href="/exclusive">
            <a className="text-dark text-decoration-none ">Exclusive</a>
          </Link>
        </li>

        <li>
          <Link href="/shop">
            <a className="text-dark text-decoration-none ">Shop</a>
          </Link>
        </li>

        <li>
          <Link href="/login">
            <a className="text-dark text-decoration-none ">Login</a>
          </Link>
        </li>
      </ul>

      <ul className="d-flex p-0 align-items-center custom-fs-11 gap-2">
        <li>
          <Link href="/about">
            <a className="text-dark text-decoration-none ">About</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a className="text-dark text-decoration-none ">Contact</a>
          </Link>
        </li>

        <li>
          <Link href="/privacy-policy">
            <a className="text-dark text-decoration-none ">Policy</a>
          </Link>
        </li>

        <li className="" >
          <Link href="/terms-conditions">
            <a className="text-dark text-decoration-none ">Terms</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
