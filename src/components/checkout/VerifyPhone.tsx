import React from "react";

export default function VerifyPhone() {
  return (
    <div className="rounded-0 border-0">
      <div className="p-3 ">
        <button
          type="button"
          className="close d-none close_opt_modal">
          {" "}
        </button>

        <div className="">
          <form>
            <div className="mb-3">
              <p className=" text-muted text-center text-success">Verify your phone number,Check your phone for verification code.</p>
              <input
                type="number"
                className="form-control rounded-0 mb-3"
                placeholder="Enter otp"
              />
            </div>
            <div className="d-flex gap-1">
              <button
                type="submit"
                className="global_black_button flex-fill">
                verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
