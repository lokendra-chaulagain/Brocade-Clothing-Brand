import axios from "axios";
import { toast } from "react-toastify";
import SendOtp from "../services/sendOtp";

let Otp=new SendOtp();

class CallApi {

  async fetchData(url, data = null) {
    let config={
      headers:{
        'authorization':await Otp.decodeToken()

      }
    }
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.get(baseUrl + url,config);
    let response = res.data;
    return response.data;
  }

  async storeData(url, data) {
    
    let config={
      headers:{
        'authorization':await Otp.decodeToken()

      }
    }
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.post(baseUrl + url, data,config);
    let response = await res.data;
    if (response.error) {
      toast.error(response.Message);
      toast.error(response.message);
    } else {
      toast.success(response.Message);
    }
    return response;
  }

  async EditData(url) {
     
    let config={
      headers:{
        'authorization':await Otp.decodeToken()

      }
    }
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.get(baseUrl + url,config);
    let response = res.data;

    return response.data;
  }

  async updateData(url, data) {
    let config={
      headers:{
        'authorization':await Otp.decodeToken()

      }
    }

    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.patch(baseUrl + url, data,config);
    let response = await res.data;
    if (response.error) {
      toast.error(response.Message);
      toast.error(response.message);
    } else {
      toast.success(response.Message);
    }

    return response;
  }

  async deleteData(url, data) {
    let baseUrl = process.env.NEXT_PUBLIC_API_URL + "/";
    let res = await axios.delete(baseUrl + url, data);
    let response = await res.data;
    if (response.error) {
      toast.error(response.Message);
      toast.error(response.message);
    } else {
      toast.success(response.Message);
    }
  }
}

export default CallApi;
