import React, { useEffect } from "react";
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/navBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <>
      <NavBar />
      <div className="bodyWrapper">
        <Component {...pageProps} />
      </div>
      <div className="footerWrapper">
        <Footer />
      </div>
      <ToastContainer theme="colored" />
    </>
  );
}

export default MyApp;
