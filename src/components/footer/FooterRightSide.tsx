import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function FooterRightSide() {
  return (
    <div className="mt-2 d-flex gap-2 flex-column align-items-center">
      <div className="p-0 d-flex gap-3">
        <a
          href={"https://lokendra-portfolio.vercel.app"}
          target="_blank"
          className="cursor-pointer">
          {" "}
          <FaFacebookSquare className="cursor-pointer color-black" />
        </a>

        <a
          href={"https://lokendra-portfolio.vercel.app"}
          target="_blank"
          className="cursor-pointer ">
          {" "}
          <AiOutlineInstagram className="cursor-pointer color-black" />
        </a>

        <a
          href={"https://lokendra-portfolio.vercel.app"}
          target="_blank">
          {" "}
          <FaTiktok className="cursor-pointer color-black" />
        </a>

        <a
          href={"https://lokendra-portfolio.vercel.app"}
          target="_blank">
          {" "}
          <ImYoutube className="cursor-pointer color-black" />
        </a>
      </div>

      <div className="d-flex p-0 align-items-center justify-content-center custom-fs-11 gap-2 ">
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
      </div>

      <div className="d-flex p-0 align-items-center custom-fs-11 gap-2">
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

        <li className="">
          <Link href="/terms-conditions">
            <a className="text-dark text-decoration-none ">Terms</a>
          </Link>
        </li>
      </div>
    </div>
  );
}
