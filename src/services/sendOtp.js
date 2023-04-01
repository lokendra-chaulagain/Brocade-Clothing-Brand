import axios from "axios";
import { useRouter } from 'next/router';

class Otp{
     async sendOtp(message,number){
        let url="https://sms.aakashsms.com/sms/v3/send";
        let data={
            "auth_token": "a4e1eb2027e5edb5e043d574db2af91cc340879d8aa6295855f3fe2879f19f7b",
            "to": number,
            "text": message,
        }
       let res=axios.post(url,data)

        return res;
        }
      
        
        
async generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}




async generateString(length) {

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = 'e';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}




async decodeToken() {

    let token= localStorage.getItem('token');

    if (token) {
        let remove_left= token.substring(0,9);
        let remove_right=  token.substring(0,token.length-11);
        return remove_right.replace(remove_left,'');
        //  return exact_token;
    }else{
         return ''
    }
   
    }


}

export default Otp;