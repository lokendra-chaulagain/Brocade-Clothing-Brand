import React,{useState,useEffect} from 'react'
import Api from "../../services/Api";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import SendOtp from "../../services/sendOtp";
import Registersuggest from "./Registersuggest";


const Forgot = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
} = useForm();
  const [data, setdata] = useState()
  let router=useRouter();
  let CallApi=new Api();
  let Otp=new SendOtp();
  

  let sendOtp=async()=>{

    // generating otp 
    let verification_code=await Otp.generateRandomNumber();

    sessionStorage.setItem('uemail',data)
    sessionStorage.setItem('uphone',data)

    // sending otp 
     await Otp.sendOtp(`[Brocade], ${verification_code} is your otp code . To keep your account safe,never forward this code`,data);
    //  resend otp 
  let res=await CallApi.storeData('auth/send-otp',{email:data,verification_code:verification_code});
  
  if(!res.error){
    router.push('/otp')
  }
      }




  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-1'>
        <div className='col col-md-6 col-sm-12 pe-3'><Registersuggest /> </div>
        <div className='col col-md-6 col-sm-12 ps-3 mt-5 mt-md-0 mt-lg-0'>
          <form onSubmit={handleSubmit(sendOtp)}>
          <h1 className="h4 text-uppercase fs-6 fw-bold">Reset Password</h1>
            <hr />
            <p className="fs-17">Enter your email or phone number to reset your password.</p>
            <div className="login mb-3">
                <input 
                    {...register("data", {
                      required: "This  is required field",
                  },
                  )}
                  onChange={(e)=>{setdata(e.target.value)}}
                type="text" className="form-control rounded-0 " placeholder="Email or Phone" />
                  {errors.data && (<small className="text-danger">{errors.data.message}</small>)}

            </div>
            <button className="myBtn w-100">Send Verification Code</button>
            <button type='button' className="ghostBtn align-right w-100" onClick={()=>router.push('/login')}>Cancel</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Forgot
