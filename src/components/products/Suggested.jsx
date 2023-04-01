import React,{useState,useEffect} from 'react'
import Api from "../../services/Api";
import ProductItem from '../../components/products/ProductItem'

const Suggested = (props) => {
  const [product, setProduct] = useState([])
  let CallApi=new Api();

  useEffect(() => {
     suggestedProduct()
  }, [])
  

  let suggestedProduct=async()=>{
    let res=await CallApi.fetchData(`suggest_product/${props.category}`)
    console.log(res);
     res &&setProduct(res);
 }
  return (
    <div className='container mt-5'>
        <h4 className="fx-6 fw-bold text-center text-uppercase  mb-5 mt-2">suggested</h4>
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 ">
          
       { product&&
       product.map((product)=>{
        return <ProductItem product={product} issuggested={true}/>
       })
    }
        </div>
    </div>
  )
}

export default Suggested
