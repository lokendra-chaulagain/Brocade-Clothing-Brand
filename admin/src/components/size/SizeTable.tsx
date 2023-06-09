import React from "react";
import TableHeading from "../TableHeading";
import AddSizeDialog from "./AddSizeDialog";
import { MdDelete } from "react-icons/md";
import { useDeleteSizeMutation, useGetAllSizeQuery } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";

export default function SizeTable() {
  const { data: sizes } = useGetAllSizeQuery();
  const [deleteSize] = useDeleteSizeMutation();

  const handleDeleteSize = (id: any) => {
    try {
      deleteSize(id);
      toast.success("Delete success")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Sizes"} />
        <AddSizeDialog />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Size Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sizes &&
              sizes.map((size: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{size.name}</td>

                  <td>
                    <div className="d-flex ">
                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => handleDeleteSize(size._id)}
                        aria-label="delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
