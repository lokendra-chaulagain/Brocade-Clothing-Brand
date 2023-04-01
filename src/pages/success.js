import React from "react";
import styles from "../../styles/success.module.css";
import Link from "next/link";

function OrderSuccess() {
  return (
    <div className="">
      <div className={styles.main_container}>
        <div className={styles.check_container}>
          <div className={styles.check_background}>
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.check_shadow}></div>
        </div>
        <div className="row text-center">
          <h1>Your Order has been Successful</h1>
          <h5 className="">Please check mail for the Invoice</h5>
          <a
            href=""
            style={{ textDecoration: "none", color: "black" }}>
            See my orders{" "}
            <Link href={{ pathname: "order/[id]" }}>
              <a className="text-dark">5</a>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
