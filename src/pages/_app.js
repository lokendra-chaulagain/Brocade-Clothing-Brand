import React, { useEffect } from "react";
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import NavBar from "../components/navBar/NavBar";
import CartitemState from "../services/context/CartitemState";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <>
      <CartitemState>
        <div className="mainWrapper">
          <div className="navWrapper">
            <NavBar />
          </div>
          <div className="bodyWrapper">
            <Component {...pageProps} />
          </div>
          <div className="footerWrapper">
            {" "}
            <Footer />
          </div>
        </div>
      </CartitemState>
      <ToastContainer theme="colored" />
    </>
  );
}

export default MyApp;
