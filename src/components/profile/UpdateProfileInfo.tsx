import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateProfileInfo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const updatePasswordHandler = () => {
    console.log(handleAllField);
    toast.success("Update Success");
    reset();
  };

  return (
    <div>
      <button
        type="button"
        className="global_black_button py-1 rounded-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Edit Profile
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit(updatePasswordHandler)}>
                <div className="mb-3">
                  <h5 className="text-muted text-center mb-3 text-uppercase">Update Your Information</h5>

                  <input
                    type="name"
                    className="form-control rounded-0 "
                    placeholder="Full Name"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0 "
                    placeholder="Email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0 "
                    placeholder="Contact"
                    name="phone"
                    {...register("contact", { required: true })}
                  />
                  {errors.contact && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Profile Picture</label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="file"
                    {...register("file", { required: true })}
                  />
                  {errors.file && <span className="text-danger">This field is required</span>}
                </div>

                <div className="d-flex gap-1">
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="outline_button flex-fill">
                    Close
                  </button>

                  <button
                    type="submit"
                    className="global_black_button flex-fill">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
