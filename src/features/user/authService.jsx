import Cookies from "js-cookie";
import axiosClient from "../../api/axios";
const user = Cookies.get('user')
const ACCESS_TOKEN = Cookies.get('ACCESS_TOKEN')
const initialState = {
    user:user?JSON.parse(user):null,
    token:ACCESS_TOKEN?ACCESS_TOKEN:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
// const config = {
//     headers:{
//         Authorization:`Bearer ${Cookies.get('ACCESS_TOKEN')}`
//     }
// }

// console.log(config)



const register = async(payload)=>{
    const response = await axiosClient.post('/register',payload)
    // console.log(response)
    if(response.data){
        Cookies.set('ACCESS_TOKEN',response.data.token)
        Cookies.set('user',JSON.stringify(response.data.user))
    }
    return response.data;

}

const signOut = async()=>{
  const {data} = await axiosClient.post('/logout',{},{
        headers:{
            Authorization:`Bearer ${Cookies.get('ACCESS_TOKEN')}`
        }})
    if(data)
        Cookies.remove('ACCESS_TOKEN')
        Cookies.remove('user')
    // return data;
}


const authService = {
    register,initialState,
    signOut
}

export default authService;