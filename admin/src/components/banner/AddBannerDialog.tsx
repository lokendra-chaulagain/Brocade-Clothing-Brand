import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import { useCreateBannerMutation } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";

export default function AddBannerDialog() {
  const [createBanner] = useCreateBannerMutation();
  const { handleClickOpen, handleClose, open } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let allFields = watch();

  const handleCreateBanner = async () => {
    const formData = new FormData();
    formData.append("title", allFields.title);
    formData.append("description", allFields.description);
    formData.append("thumbnail", allFields.thumbnail);

    try {
      createBanner(formData);
      handleClose();
      reset();
      toast.success("Create success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="end">
        <Button
          size="large"
          onClick={handleClickOpen}
          className="customCard px-4">
          Add New
        </Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}>
        <form
          className="customCard p-3 overflow_hidden"
          onSubmit={handleSubmit(handleCreateBanner)}>
          <h4>Create New Banner </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <label
              htmlFor="formFile"
              className="form-label px-0 mt-2 h6 ">
              Banner Image
            </label>

            <input
              type="file"
              className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              {...register("thumbnail", { required: "Title is required" })}
              placeholder="Banner title"
            />
            {errors.thumbnail && <p className="form_hook_error">{`${errors.thumbnail.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="title"
              className="form-label px-0 mt-2 h6 ">
              Banner Title
            </label>
            <input
              className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              {...register("title", { required: "Title is required" })}
              placeholder="Banner title"
            />
            {errors.title && <p className="form_hook_error">{`${errors.title.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="description"
              className="form-label px-0 mt-2 h6   ">
              Description
            </label>
            <input
              className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              {...register("description", { required: "description is required" })}
              placeholder="Description"
            />
            {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
