import LimitedEdition from "../components/LimitedEdition";
import ProductItem from "../components/ProductItem";
import Slider from "../components/Slider";
import products from "../data/products.json";

export default function Home() {
  const limited = products[1].image;
  return (
    <div className="">
      <Slider />
      <div className=" px-2 px-sm-5 ">
        <p className="h3 fw-bold ">RACING EDITION SERIES</p>
        <ProductItem />

        <LimitedEdition
          title={"LIMITED EDITION SERIES"}
          image={limited}
        />
      </div>
    </div>
  );
}
