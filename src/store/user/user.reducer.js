import { USER_ACTION_TYPES } from "./user.types"
  const INITIAL_STATE ={
    currentUser : null
  }
  
  
 export  const userReducer = (state  = INITIAL_STATE  , action) =>{
  

    console.log("dispatched")
      const {type , payload} = action  
      console.log(payload)
  
  switch(type){
      case  USER_ACTION_TYPES.SET_CURRENT_USER :
          return{
           ...state,
              currentUser : payload
          }
  
          default: 
        
          return state
  }
      
  }