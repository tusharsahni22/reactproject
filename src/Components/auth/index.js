// isLoggedIn

export const isLoggedIn = ()=>{
    if(window.localStorage.getItem("token")){return true}
    else{ return false}    
    }



// doLoggedIn
 export const doLoggedIn = async(data,next)=>{
    window.localStorage.clear()
    window.localStorage.setItem("token",JSON.stringify(data))
    next()
 }



// doLogout

export const doLogout = (data)=>{
    window.localStorage.removeItem("token")
    window.location.reload(true)
    }


// currentUser
export const currentUser =()=>{
    let dataString= window.localStorage.getItem("token")
    let data=JSON.parse(dataString)
    console.log("user",data)
     return data?.result  
    
}