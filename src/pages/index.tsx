import LimitedEdition from "../components/LimitedEdition";
import ProductItem from "../components/ProductItem";
import Slider from "../components/Slider";
import yellow from "../assets/products/jacket-yellow-1.webp";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <div className=" px-2 px-sm-5 ">
        <p className="h3 fw-bold ">RACING EDITION SERIES</p>
        <ProductItem />

        <LimitedEdition
          title={"LIMITED EDITION SERIES"}
          image={yellow}
        />
      </div>
    </div>
  );
}
