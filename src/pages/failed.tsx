import React, { useEffect } from "react";
import styles from "../../styles/failure.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
function OrderFailure(props) {
  return (
    <div className="">
      <div className={styles.main_container}>
        <div className={styles.check_container}>
          <div className={styles.check_background}>
            <svg
              viewBox="0 0 51 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                className={styles.checkmark_circle_error}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className={styles.checkmark_check}
                d="M16 16 36 36 M36 16 16 36"
                stroke="white"
                strokeWidth="13"
                fill="none"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.check_shadow}></div>
        </div>
        <div className="row text-center">
          <h3>Payment Failed</h3>
          <h5 className="">
            Your order has been placed but payment is failed due to unknown reason.<br></br> Please contact to Brocade for further detail.
          </h5>
          <Link href="/">
            <a style={{ textDecoration: "none", color: "black" }}>Back to home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderFailure;
