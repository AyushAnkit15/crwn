import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"


const setCurrentUser = (user) =>{
    console.log('set current user' , user)
   return createAction( USER_ACTION_TYPES.SET_CURRENT_USER ,  user)
    }

    export default setCurrentUser