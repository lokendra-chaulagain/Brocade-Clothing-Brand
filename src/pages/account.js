import Image from "next/image";
import AccountNavTab from "../components/AccountNavTab";
import React from "react";
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import { toast } from "react-toastify";

export default function account() {
  const LogoutHandler = async () => {
    toast.success(" Succesfully Logout");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  watch();

  return (
    <div className="container  px-5 paddingTop">
      <div className="row mx-0">
        <div className="d-flex align-items-center gap-4">
          <Image
            // src={`${process.env.NEXT_PUBLIC_API_URL}/${obj.thumbnail}`}
            height={100}
            width={100}
            objectFit="cover"
            className="col-12 col-sm-6 rounded-circle"
          />

          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <h3>Lorem, ipsum dolor.</h3>
            <button
              className="bg-dark text-white rounded-1"
              onClick={LogoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Address Modal-------- */}

      <div
        className="modal fade"
        id="addressModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: "none", borderRadius: "0 !important" }}
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered rounded-0 border-0">
          <div className="modal-content p-3 position-relative">
            <div className="modal-body">
              <form onSubmit={handleSubmit(updateHandler)}>
                <div className="mb-3">
                  <h5 className="text-muted text-center mb-3 text-uppercase">Update Your Information</h5>

                  <input
                    type="name"
                    className="form-control rounded-0 mb-3"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0 mb-3"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0 mb-3"
                    placeholder="Contact"
                    name="phone"
                    id="phone"
                  />
                </div>

                {/* <div className="mb-3">
                  <label for="formFile" className="form-label">
                    Profile Picture
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div> */}

                <ImageUploading
                  value={images}
                  onChange={onChange}
                  maxNumber={1}
                  dataURLKey="data_url"
                  acceptType={["jpg", "png", "jpeg", "webp"]}>
                  {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        type="button"
                        className="btn btn-secondary btn-block d-block w-100"
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}>
                        Click or Drop here
                      </button>
                      &nbsp;
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="image-item">
                          <Image
                            src={image.data_url}
                            alt=""
                            width="80"
                            height={80}
                            className="custom-border-radius-50-pers"
                          />

                          <div className="image-item__btn-wrapper">
                            <button
                              onClick={() => onImageUpdate(index)}
                              className="btn btn-primary btn-sm">
                              Update
                            </button>
                            <button
                              onClick={() => onImageRemove(index)}
                              className="btn btn-danger btn-sm">
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
                {obj.thumbnail && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${obj.thumbnail}`}
                    alt=""
                    width="80"
                    height={80}
                    className="img-fluid custom-border-radius-50-per"
                  />
                )}

                <div className="d-flex gap-1">
                  <button className="global_black_button flex-fill">Update</button>
                  <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="mySecondaryBtn flex-fill">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AccountNavTab />
    </div>
  );
}
