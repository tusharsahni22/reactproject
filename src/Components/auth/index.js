// isLoggedIn

export const isLoggedIn = ()=>{
    if(window.localStorage.getItem("token")){return true}
    else{ return false}    
    }



// doLoggedIn
 export const doLoggedIn = (data)=>{
 window.localStorage.setItem("token",data)
 }



// doLogout

export const doLogout = (data)=>{
    window.localStorage.removeItem("token")
    window.location.reload(true)
    }


// currentUser