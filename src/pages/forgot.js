import React,{useEffect} from 'react'
import Forgot from '../components/account/Forgot'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const forgot = () => {

  let router=useRouter();
  useEffect(() => {
    let token=Cookies.get('token')
  if(token){
router.push('/auth/profile')
  }
    
  }, [])
  
  return (
    <div  className='paddingTop'>
      <Forgot />
    </div>
  )
}

export default forgot
