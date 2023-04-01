import React from 'react'
import moment from 'moment/moment';

function  order(props) {
    let row=props&& props.order[0];
    

  return (
    <>
         <div className="col-md-6">
            <div className="card">
   <div className="card-header">
   <h5>Order Summary</h5>
   </div>

              <div className="card-body">
    <table className='table'>
        <tbody>
<tr>
    <th>Order ID</th>
    <th>{row.order_id}</th>

</tr>
<tr>
    <th>Order Date</th>
    <th>        {moment(row.createdAt).format('DD-MM-YYYY')}
</th>

</tr>
<tr>
    <th>Shipping Fee</th>
    <th>{row.shipping_charge}</th>

</tr>
<tr>
    <th>Coupon </th>
    <th>{row.coupon_value}</th>

</tr>

<tr>
    <th>Total</th>
    <th>{row.total}</th>

</tr>


<tr>
    <th>Payment Mode</th>
    <th>{row.payment_mode}</th>

</tr>


<tr>
    <th>Payment ID</th>
    <th>{row.payment_id}</th>

</tr>
<tr>
    <th>Status</th>
    <th>


    { row.status=='1' &&
            <span className="badge bg-success">Pending</span>
        }
         { row.status=='2' &&
       
              <span className="badge bg-info">Review</span>
      }

{ row.status=='3' &&
       
       <span className="badge bg-primary">Shipping</span>
}
{ row.status=='4' &&
       
              <span className="badge bg-success">Delivered</span>
      }
{ row.status=='5' &&
       
       <span className="badge bg-danger">Cancel</span>
}

{ row.status=='6' &&
       
              <span className="badge bg-info">Refeund Request</span>
      }

{ row.status=='7' &&
       
              <span className="badge bg-warning">Refunded</span>
      }
    </th>

</tr>
</tbody>
    </table>
    </div>
            </div>

          </div>
    </>
  )
}

export default order