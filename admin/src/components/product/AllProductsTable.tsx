import React from "react";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import Image from "next/image";
import parse from "html-react-parser";

export default function AllProductsTable({ products, deleteProduct, productTotalCount, currentCount }: any) {
  console.log(products);

  return (
    <>
      <div className="customCard mt-2 mb-2">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Size</th>
              <th scope="col">Color</th>
              <th scope="col">Category</th>
              {/* <th scope="col">Description</th> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{currentCount - 8 + index + 1}</th>
                  <td>{product.name}</td>
                  <td>
                  <Image
                      src={product.images[0]}
                      alt="img"
                      height={35}
                      width={35}
                      objectFit="scale-down"
                    />
                  </td>
                  <td className="small">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        sizes
                      </button>
                      <ul className="dropdown-menu">
                        {product.size &&
                          product.size.map((item: any, index: any) => (
                            <li
                              key={index}
                              className="dropdown-item">
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </td>
                  <td className="small">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        colors
                      </button>
                      <ul className="dropdown-menu">
                        {product.color &&
                          product.color.map((item: any, index: any) => (
                            <li
                              key={index}
                              className="dropdown-item">
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </td>

                  <td>{product.category}</td>
                  {/* <td>{parse(product.description.substring(0, 20))}</td> */}
                  {product.featured == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.featured == 0 && <td className="active_status_red_color">No</td>}
                  {product.topSelling == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.topSelling == 0 && <td className="active_status_red_color">No</td>}

                  <td>
                    <div className="d-flex ">
                      <Link href={`/product/${product._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteProduct(product._id)}
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
