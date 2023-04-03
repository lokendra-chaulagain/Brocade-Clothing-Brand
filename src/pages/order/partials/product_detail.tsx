import React from 'react'

function  product_detail(props) {
    let details= props.order_detail;
    let i=0;
  return (
    <>
         <div className="col-md-12 mt-2">
            <div className="card">
   <div className="card-header">
   <h5>Product Detail</h5>
   </div>

              <div className="card-body">
    <table className='table'>
<thead>

   <tr>
   <th>
        Image
    </th>
   <th>
        Name
    </th>
    <th>
        Size
    </th>
    <th>
        Color
    </th>
    <th>
        Unit price
    </th>

    <th>
        Qty
    </th>
    <th>
        Sub total
    </th>
   </tr>
</thead>

<tbody>


{

details&&details.map((row)=>{

return <tr>
   <td>
        Image
    </td>
   <td>
        {row.product[0].name}
    </td>
    <td>
    {row.size?row.size:"N/A"}

    </td>
    <td>
    {row.color?row.color:"N/A"}

<p style={{background:`${row.color}`,height:"10px",width:'40px'}}></p>
    </td>
    <td>
    {row.price}

    </td>

    <td>
    {row.qty}

    </td>
    <td>
    {row.qty*row.price}

    </td>
   </tr>
})}

</tbody>
    </table>
    </div>
            </div>

          </div>
    </>
  )
}

export default product_detail