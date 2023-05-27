import axios from "axios";
import { currentUser } from "../auth";


export const getUser = ()=>{
    const token= currentUser()
    const getUserInstance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`Bearer ${token}`},
        validateStatus:function(status){
            return status <500;
        }
    })

    return  getUserInstance.get("/api/getuser").then((result)=>{
        console.log("first",result)
        return result

    }).catch((err)=>{
        console.log("Err from get User",err)
    })

}
export const changeProfile =(data)=>{
    const token= currentUser()
    const instance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout:10000,
    headers:{"token":`Bearer ${token}`},
    validateStatus:function(status){
        return status <500;
    }
})
    return instance.put("/api/updateUser",data).then((result)=>{
        
        return result
        
    }).catch((err)=>{
        console.log("Err from get User",err)
    })

}