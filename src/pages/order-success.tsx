import React from "react";
import styles from "../../styles/success.module.css";

export default function OrderSuccess() {
  return (
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
          href="http://localhost:3000/"
          className="text-decoration-none  ">
          See my orders
        </a>
      </div>
    </div>
  );
}
