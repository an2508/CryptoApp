import { GET_CURRENCIES_ERROR,GET_CURRENCIES_SUCCESS,GET_CURRENCIES_REQUEST } from "../types/types";
import axios from "axios"
import { getCurrenciesApi } from "../../api/currency";
// import { currencyErrorAC,currencyRequestAC,currencySuccessAC} from "../action/actions"


export const currencyRequestAC=()=>{
    return {
        type:GET_CURRENCIES_REQUEST,
        
    }
        
}

export const currencySuccessAC=(data)=>{
    return {
        type:GET_CURRENCIES_SUCCESS,
        payload:data
    }
        
}

export const currencyErrorAC=(err)=>{
    return {
        type:GET_CURRENCIES_ERROR,
        payload:err
    }
        
}
//thunk function

const getCurrencies =  () => 
    async  (dispatch) => {
   
       
        try {
    
            dispatch(currencyRequestAC())
            const response = await getCurrenciesApi();
            console.log(response.data)
    
            dispatch(currencySuccessAC(response.data))
            // console.log(response.data)
        }
    
        catch (err) {
            dispatch(currencyErrorAC(err))
        }
    }

export default getCurrencies
