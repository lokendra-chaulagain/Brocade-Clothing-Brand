import Image from 'next/image'
import React from 'react'

const Explusiveproductview = () => {
  return (
    <>
      <div className="container">
        <div className="product d-sm-flex align-items-start row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 mb-5">
            <div className="img col">
                {/* <Image className='' src={exclusiveImg} height="1224px" width='800px' objectFit='contain' /> */}
                {/* <Image className='' src={exclusiveImg} height="1024px" width='800px' objectFit='contain' /> */}
            </div>
            <div className="col col-sm-12 col-md-12 details mt-5 pt-5 sticky-top">
                <div className="mt-5">
                    <h1>Yellow Jump Suit</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem odio autem sint tenetur, nisi numquam animi perferendis! Nam non officiis reiciendis sunt optio cupiditate ut reprehenderit iure tempore natus?</p>
                    <button className="myBtn">Reedem Now</button>
                </div>
            </div>
        </div>

        <div className="d-sm-flex gap-5">
            <div className="card border-0">
                <Image src={imageCanvas} height={400} width={350} objectFit='cover' layout='responsive' />
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quia unde nihil veritatis cum.</p>
            </div>
            <div className="card border-0">
                <Image src={imageCanvas} height={400} width={350} objectFit='cover' layout='responsive' />
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quia unde nihil veritatis cum.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Explusiveproductview
