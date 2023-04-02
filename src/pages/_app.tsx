import React, { useEffect } from "react";
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import NavBar from "../components/navBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsLetter from "../components/NewsLetter";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <>
      <NavBar />
      <div className="bodyWrapper">
        <Component {...pageProps} />
      </div>
      <NewsLetter />
      <div className="footerWrapper">
        <Footer />
      </div>
      <ToastContainer theme="colored" />
    </>
  );
}

export default MyApp;
