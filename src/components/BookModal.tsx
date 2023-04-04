import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function BookModal() {
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
    toast.success("Successfully Booked");
    reset();
  };

  return (
    <div>
      <button
        type="button"
        className="global_black_button py-1 rounded-0"
        data-bs-toggle="modal"
        data-bs-target="#bookModal">
        Book Now
      </button>

      <div
        className="modal fade"
        id="bookModal"
        aria-labelledby="bookModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit(updatePasswordHandler)}>
                <div className="mb-3">
                  <h5 className="text-muted text-center mb-3 text-uppercase">Book The Lunching Product</h5>

                  <input
                    type="name"
                    className="form-control rounded-0 "
                    placeholder="Full Name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0 "
                    placeholder="Email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0 "
                    placeholder="Contact"
                    id="phone"
                    {...register("contact", { required: true })}
                  />
                  {errors.contact && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control rounded-0 "
                    placeholder="Quantity"
                    id="quantity"
                    {...register("quantity", { required: true })}
                  />
                  {errors.quantity && <span className="text-danger">This field is required</span>}
                </div>

                <div className="d-flex gap-1">
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="global_outline_button flex-fill">
                    Close
                  </button>

                  <button
                    type="submit"
                    className="global_black_button flex-fill">
                    Confirm
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
