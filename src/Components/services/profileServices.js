import axios from "axios";
import { currentUser } from "../auth";
const token=currentUser()

const instance =axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout:10000,
    headers:{"token":`Bearer ${token}`},
    validateStatus:function(status){
        return status <500;
    }
})

export const getUser =()=>{
    return instance.get("/api/getuser").then((result)=>{
        console.log("first",result)
        return result

    }).catch((err)=>{
        console.log("Err from get User",err)
    })

}
export const changeProfile =(data)=>{
    return instance.put("/api/updateUser",data).then((result)=>{
        
        return result
        
    }).catch((err)=>{
        console.log("Err from get User",err)
    })

}