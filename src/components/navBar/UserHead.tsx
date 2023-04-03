import Link from "next/link";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";

export default function UserHead() {
  return (
    <div className="dropdown">
      <BsPersonCircle
        className="dropdown-toggle cp"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        color="white"
        size={25}
      />
      <ul className="dropdown-menu mt-3 rounded-0">
        <li>
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
        </li>

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
      </ul>
    </div>
  );
}
