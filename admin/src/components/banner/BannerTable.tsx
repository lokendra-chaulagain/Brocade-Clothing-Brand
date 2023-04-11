import React from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useDeleteBannerMutation, useGetAllBannerQuery } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";

export default function BannerTable({ currentCount }: any) {
  const { data: banners } = useGetAllBannerQuery();
  const [deleteBanner] = useDeleteBannerMutation();

  const handleBannerDelete = (id: any) => {
    try {
      deleteBanner(id);
      toast.success("Delete success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="customCard mt-2 mb-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banners &&
              banners.allBanner.map((banner: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{currentCount - 5 + index + 1}</th>
                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${banner.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${banner.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>
                  <td>{banner.title.substring(0, 30)}</td>
                  <td>{banner.description.substring(0, 40)}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`/banner/${banner._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <div>
                        <MdDelete
                          className="delete_button_icon"
                          onClick={() => handleBannerDelete(banner._id)}
                          aria-label="delete"
                        />
                      </div>
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
