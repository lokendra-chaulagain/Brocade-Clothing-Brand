import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

import Link from "next/link";
import API from "../../src/services/Api.js";
import { toast } from "react-toastify";

const CallApi = new API();

const defaultValue = {
  email: "",
};

const Footer = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  watch();
  const [subscribe, setSubscribe] = useState(defaultValue);

  const addHandler = async () => {
    let res = await CallApi.storeData("subscriber/store", { ...watch() });
    if (!res.error) {
      document.getElementById("exampleModal").classList.add("d-block");
      document.getElementById("exampleModal").classList.add("d-none");
      document.getElementsByClassName("modal-backdrop")[0].classList.add("d-none");
    }
  };

  const addHandler2 = async (e) => {
    e.preventDefault();

    let email = document.getElementById("subemail").value;
    if (!email) {
      toast.error("Enter your email");
      return false;
    }
    let res = await CallApi.storeData("subscriber/store", { email: email });
    document.getElementById("subemail").value = "";
  };

  return (
    <div
      className="px-5 footer_print"
      style={{ backgroundColor: "#f8f9fa" }}>
      <div className=" d-md-flex justify-content-between mt-4 pt-4 ">
        <label
          className="newsletterTxt d-sm-none d-md-block d-none my-5 d-flex justify-content-start custom-fs-11 anchor "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ cursor: "pointer" }}>
          NEWSLETTER
        </label>

        {/* Footer Subscribe========== */}

        <div
          className="d-block d-md-none my-4 p-0"
          style={{ display: "none" }}>
          <form onSubmit={addHandler2}>
            <div className="mb-3">
              <label className="form-label">Email address</label>

              {/* copied */}
              <input
                type="email"
                className="form-control rounded-0 mb-3"
                placeholder="example@email.com"
                name="email2"
                id="subemail"
              />
            </div>

            <div className="d-grid gap-2">
              <button
                className="global_black_button"
                type="submit">
                Send me cool Stuff{" "}
              </button>
            </div>
          </form>
        </div>

        {/* ================== */}

        <div className="my-md-5 d-flex justify-content-center custom-fs-11">&copy;2022 BROCADE</div>

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
          <ul className="d-flex p-0 align-items-center custom-fs-11 gap-2">
            <li>
              <Link href="/aboutus">
                <a className="text-dark text-decoration-none">ABOUT</a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a className="text-dark text-decoration-none">CONTACT</a>
              </Link>
            </li>

            <li>
              <Link href="/ourpolicy">
                <a className="text-dark text-decoration-none">POLICY</a>
              </Link>
            </li>

            <li>
              <Link href="/termcondition">
                <a className="text-dark text-decoration-none">TERMS</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* NewsLetter Modal=================== */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          style={{ display: "none", borderRadius: "0 !important" }}
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered rounded-0 border-0">
            <div className="modal-content p-3 position-relative">
              <div className="modal-body">
                <form onSubmit={handleSubmit(addHandler)}>
                  <div className="mb-3">
                    <label className="col-form-label text-muted text-center">GET NOTIFIED ABOUT NEW PRODUCT ARRIVALS AND EARLY RELEASE INFO</label>
                    <input
                      {...register("email", {
                        required: "Email is required field",
                      })}
                      type="email"
                      className="form-control rounded-0 mb-3"
                      placeholder="example@email.com"
                      name="email"
                    />
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                  </div>
                  <div className="d-flex gap-1">
                    <button
                      type="submit"
                      className="global_black_button flex-fill">
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ================== */}
      </div>
    </div>
  );
};

export default Footer;
