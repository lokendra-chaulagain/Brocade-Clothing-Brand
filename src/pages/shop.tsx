import React from 'react'
import ProductItem from '../components/ProductItem'
import Customization from '../components/exclusive/Customization'

export default function shop() {
  return (
    <div className='paddingTop'>
        <ProductItem/>
        <p className="h2 fw-bold ps-3 mt-5">WE OFFERS CUSTOMIZATION DESIGN</p>
        <Customization/>
    </div>
  )
}
