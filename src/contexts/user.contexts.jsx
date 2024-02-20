import React, { useState , useEffect } from 'react'
import { createContext } from 'react'
import { createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import { onAuthStateChangedListener , signOutUser } from '../utils/firebase/firebase.utils'
export const UserContext = createContext({
currentUser : null  , 
setCurrentUser : () => null  , 

})

export const UserProvider = ({children})=>{

    const [currentUser , setCurrentUser] = useState(null)
    const value  ={currentUser,  setCurrentUser}
   // signOutUser()


    useEffect(()=>{
const unsubscribe = onAuthStateChangedListener(async (user)=>{

    if(user){
        await createUserDocumentFromAuth(user)
    }
    setCurrentUser(user)
    console.log(user)
})

return unsubscribe
    },[])
    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
}

// export  {UserContext , UserProvider} ; 

 