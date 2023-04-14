import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetAllCategoryQuery } from "../../redux/api/globalApi";

export default function Collection() {
  const { data: categories } = useGetAllCategoryQuery();
  console.log(categories);

  return (
    <div className="container paddingTop">
      <p className="text-center h1 fw-bold">COLLECTIONS</p>
      <div className="row mt-4">
        {categories &&
          categories.map((category: any, _id: any) => (
            <Link
              key={_id}
              href={`/collection/${category.slug}`}>
              <div className="col-6 mb-4 col-lg-3 cursor-pointer ">
                <Image
                  src={category.image}
                  alt="img"
                  height={500}
                  width={500}
                  objectFit="scale-down"
                />
                <p className=" h5 text-center  ">{category.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
