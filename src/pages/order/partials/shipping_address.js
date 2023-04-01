import React from 'react'

function  shipping_address(props) {
    let row=props&& props.shippng_detail[0];
    

  return (
    <>
         <div className="col-md-6">
            <div className="card">
   <div className="card-header">
   <h5>Shipping Address</h5>
   </div>

              <div className="card-body">
    <table className='table'>
        <tbody>
<tr>
    <th>Name</th>
    <th>{row.name}</th>

</tr>

<tr>
    <th>Email</th>
    <th>{row.email}</th>

</tr>
<tr>
    <th>Phone </th>
    <th>{row.phone}</th>

</tr>

<tr>
    <th>City</th>
    <th>{row.city}</th>

</tr>


<tr>
    <th>Address</th>
    <th>{row.address}</th>

</tr>


<tr>
    <th>Pincode</th>
    <th>{row.pincode}</th>

</tr>

</tbody>
    </table>
    </div>
            </div>

          </div>
    </>
  )
}

export default shipping_address