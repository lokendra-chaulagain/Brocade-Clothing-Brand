import LimitedEdition from "../components/LimitedEdition";
import ProductItem from "../components/ProductItem";
import Slider from "../components/Slider";
import { useGetAllProductQuery } from "../redux/api/globalApi";

export default function Home() {
  const { data: products } = useGetAllProductQuery();
  const limited = products && products[9].images[0];

  console.log(products);
  return (
    <div className="">
      <Slider />
      <div className=" px-2 px-sm-5 ">
        <ProductItem products={products} title={"RACING EDITION SERIES"} />
        <ProductItem products={products} title={"SHORTS"} />
        <ProductItem products={products} title={"SHACKET"} />

        <LimitedEdition
          title={"LIMITED EDITION SERIES"}
          image={limited}
        />

        
      </div>
    </div>
  );
}
