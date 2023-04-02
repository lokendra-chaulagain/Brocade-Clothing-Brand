import Homepage from "../components/Home";
import ProductItem from "../components/ProductItem";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="container-fluid px-5">
        <p className="h3 fw-bold ">RACING EDITION SERIES</p>
        <ProductItem />
      </div>
      <Homepage />
    </>
  );
}
