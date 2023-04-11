import React, { useContext, useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import { useCreateBannerMutation } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";
import axios from "axios";
import CustomSpinner from "../CustomSpinner";

export default function AddBannerDialog() {
  const [createBanner, createBannerResult] = useCreateBannerMutation();
  const { isLoading, isSuccess, isError, data, error, status } = createBannerResult;
  console.log(createBannerResult);
  const notify = () => toast("Wow so easy!");

  const { handleClickOpen, handleClose, open } = useContext(MiscellaneousContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let allFields = watch();

  const [images, setImages] = useState([]);

  const handleImageUpload = async (e: any) => {
    const formData = new FormData();
    formData.append("title", allFields.title);
    formData.append("description", allFields.description);
    if (images) {
      for (let i = 0; i < allFields.images.length; i++) {
        formData.append("images", allFields.images[i]);
      }
    }

    try {
      // const response = await axios.post("http://localhost:12002/api/banner", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      createBanner(formData);

      // setImages(response.data.urls);
      reset();
    } catch (error) {
      console.error(error);
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
          onSubmit={handleSubmit(handleImageUpload)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Banner </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          {isLoading && <h5 className="text-primary">Uploading...</h5>}
          {isSuccess && <h5 className="text-success">Upload Success</h5>}
          {isError && <h5 className="text-danger">Upload Failure</h5>}

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

          <div className="row">
            <label
              htmlFor="formFile"
              className="form-label px-0 mt-2 h6 ">
              Banner Image
            </label>

            <input
              type="file"
              multiple
              // onChange={handleImageUpload}
              className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              {...register("images", { required: "Images are required" })}
              placeholder="Images"
            />
            {errors.images && <p className="form_hook_error">{`${errors.images.message}`}</p>}
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>

            {isLoading ? (
              <CustomSpinner />
            ) : (
              <Button
                type="submit"
                className="customCard px-4">
                Add
              </Button>
            )}
          </div>
        </form>
      </Dialog>
    </>
  );
}
