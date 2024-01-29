import axios from "axios";
import Cookies from "js-cookie";

const axiosClient =  axios.create({
    baseURL:'http://localhost:8000/api',
    withCredentials:true
});


axiosClient.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${Cookies.get('ACCESS_TOKEN')}`
    return config;
})

axiosClient.interceptors.response.use((response)=>{
    return response;
},(err)=>{
    try{
        const { response} = err;

    if(response.status == 401){
        // localStorage.remove('ACCESS_TOKEN')
        localStorage.removeItem('ACCESS_TOKEN')
    }
    throw err;
    }catch(err){
        console.log(err)
    }
})

export default axiosClient