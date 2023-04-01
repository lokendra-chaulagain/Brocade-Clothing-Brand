import Image from 'next/image';
import React,{useEffect,useState} from 'react'
import API from '../services/Api'
import { useRouter } from 'next/router';
import moment from 'moment/moment';
import Link from 'next/link';

const Invoice = () => {
let CallApi=new API();
let router=useRouter();

    const [Cms, setCms] = useState()
    const [obj, setObj] = useState({});

    useEffect(() => {
        fetchCms()
        fetchOrder();
        setTimeout(() => {
        // window.print()
            
        }, 100);
    }, [router.query])
    
    let fetchCms=async()=>{
        let res= await CallApi.fetchData('cms');
        res && setCms(res)
    }

    let fetchOrder=async()=>{
        let data = await CallApi.fetchData(`order/view/${router.query.id}`);
        data.order.length>0&&setObj({ ...data });
        data&&console.log(data)
    }

  return (
    <>
     
      {obj.order && <table width="100%"  className='print_table' cellpadding="0" cellspacing="0" border="0"  style={{ backgroundColor: '#d5d5d5' }}>
     
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  <div className='footer_print text-center ghostBtn'>
       <Link href="/account"><a className='text-dark'>⬅ BACK</a></Link>
    </div>

           <tbody>
                <tr>
                    <td>
                        <table width="600" align="center" cellpadding="15" cellspacing="0" border="0" className="devicewidth" style={{ backgroundColor: '#ffffff' }}>
                            <tbody>
                                {/* Start header Section */}
                                <tr>
                                    <td style={{ paddingTop: '30px' }}>
                                        <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" className="devicewidthinner" style={{ borderBottom: '1px solid #eeeeee', textAlign: 'center' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ paddingBottom: '10px' }}>
                                                {Cms&&    <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/" + Cms.logo}
            alt="Brocode Logo"
            width={60}
            height={60}
            className="d-inline-block align-text-top"
            style={{ cursor: "pointer" }}
          />}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                    {Cms &&   Cms.address1}
                                                    </td>
                                                </tr>
                                             
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                    {Cms&&Cms.phone1}  
  &nbsp;|                                                         {Cms&&Cms.email1}

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '25px' }}>
                                                        <strong>Order Number:</strong> {obj.order[0].order_id} | <strong>Order Date:</strong> { moment(obj.order[0].createdAt).format('DD-MM-YYYY')}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                {/* End header Section */}
                                
                                {/* Start address Section */}
                                <tr>
                                    <td style={{ paddingTop: '0' }}>
                                        <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" className="devicewidthinner" style={{ borderBottom: '1px solid #bbbbbb' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '55%', fontSize: '16px', fontWeight: 'bold', color: '#666666', paddingBottom: '5px' }}>
                                                        Delivery Adderss
                                                    </td>
                                                    <td style={{ width: '45%', fontSize: '16px', fontWeight: 'bold', color: '#666666', paddingBottom: '5px' }}>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '55%', fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                        {obj.shippng_detail[0].name}
                                                    </td>
                                                    <td style={{ width: '45%', fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                    {obj.shippng_detail[0].email}

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '55%', fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                    {obj.shippng_detail[0].city},  {obj.shippng_detail[0].pincode}

                                                    </td>
                                                    <td style={{ width: '45%', fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                    {obj.shippng_detail[0].phone}

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '55%', fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '10px' }}>
                                                    {obj.shippng_detail[0].area}

                                                    </td>
                                                    <td style={{ width: '45%', fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '10px' }}>
                                                    {obj.shippng_detail[0].address}

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                {/* End address Section */}
                                
                                {/* Start product Section */}

                                {
                                    obj.order_detail.map((product)=>{

 return <tr>
                                    <td style={{ paddingTop: '0' }}>
                                        <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" className="devicewidthinner" style={{ borderBottom: '1px solid #eeeeee' }}>
                                            <tbody>
                                                <tr>
                                                    <td rowspan="4" style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                                                        {/* <Image src={Brocade} alt="PapaChina" height={100} width={100} /> */}
                                                    </td>
                                                    <td colspan="2" style={{ fontSize: '14px', fontWeight: 'bold', color: '#666666', paddingBottom: '5px' }}>
                                                    {product.product[0].name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#757575', width: '440px' }}>
                                                        Quantity:                                                     {product.qty}

                                                    </td>
                                                    <td style={{ width: '130px' }}></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#757575' }}>
                                                                                                           {product.color && Color +':'+ product.color }

                                                    </td>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#757575', textAlign: 'right' }}>
                                                        NPRS  
                                                        &nbsp;
                                                    {product.price }
                                                        &nbsp;
                                                         
                                                         Per Unit
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#757575', paddingBottom: '10px' }}>
                                                    {product.size && Size +':'+ product.size }

                                                    </td>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#757575', textAlign: 'right', paddingBottom: '10px' }}>
                                                        <b style={{ color: '#666666' }}>NPRS 
                                                        &nbsp;
                                                    {product.qty * product.price }
                                                    &nbsp;
                                                        
                                                        </b> Total
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                    })
                               
                                }
                               
                                {/* End product Section */}
                                
                                {/* Start calculation Section */}
                                <tr>
                                    <td style={{ paddingTop: '0' }}>
                                        <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" className="devicewidthinner" style={{ borderBottom: '1px solid #bbbbbb', marginTop: '-5px' }}>
                                            <tbody>
                                                <tr>
                                                    <td rowspan="5" style={{ width: '55%' }}></td>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666' }}>
                                                        Sub-Total:
                                                    </td>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666', width: '130px', textAlign: 'right' }}>
                                                        NPRS {obj.order[0].sub_total}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '10px', borderBottom: '1px solid #eeeeee' }}>
                                                        Shipping Fee:
                                                    </td>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '10px', borderBottom: '1px solid #eeeeee', textAlign: 'right' }}>
                                                        NPRS   {obj.order[0].shipping_charge}
                                                    </td>
                                                </tr>


                                               {obj.order[0].coupon && obj.order[0].coupon_value!=0 && <tr>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '10px', borderBottom: '1px solid #eeeeee' }}>
                                                        Discount:
                                                    </td>
                                                    <td style={{ fontSize: '14px', lineHeight: '18px', color: '#666666', paddingBottom: '10px', borderBottom: '1px solid #eeeeee', textAlign: 'right' }}>
                                                        NPRS   {obj.order[0].coupon_value}
                                                    </td>
                                                </tr>
}
                                                <tr>
                                                    <td style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '18px', color:'#666666', paddingTop: '10px' }}>
                                                        Order Total
                                                    </td>
                                                    <td style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '18px', color:' #666666', paddingTop: '10px', textAlign: 'right' }}>
                                                       NPRS &nbsp;
                                                       {obj.order[0].total}

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '18px', color:'#666666' }}>
                                                        Payment Mode:
                                                    </td>
                                                    <td style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '18px', color:'#666666', textAlign:'right' }}>
                                                        {obj.order[0].payment_mode.toUpperCase()}
                                                    </td>
                                                </tr>
                                              
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                {/* End calculation Section */}
                                
                              
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
            <br></br>
<br></br>
<br></br>
        </table>

}


    </>
  )
}

export default Invoice
