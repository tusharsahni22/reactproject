 import axios from "axios"
 export const singUpService =(data) =>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/signup`,data).then((result)=>{return result

    }).catch((e)=>{
        console.log("err",e)
    })

 }