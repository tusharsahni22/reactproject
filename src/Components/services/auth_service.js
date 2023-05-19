 import axios from "axios"


 export const singUpService =(data) =>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/signup`,data,{
        validateStatus:function(status){
            return status <500;
        }
    }).then((result)=>{
          return result
    },(error) => { console.log(error) }).catch((e)=>{
        console.log("err",e)
    })

 }

 export const  loginService = async(data) =>{
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/api/login`,data,{
        validateStatus:function(status){
            return status <500;
        }
    }).then((response)=>{
        
        return response
    }).catch((e)=>{

        console.log("err",e)
    })

 }