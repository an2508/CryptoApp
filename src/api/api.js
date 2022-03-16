// import axios from "axios"
// import { currencyErrorAC,currencyRequestAC,currencySuccessAC} from "../redux/action/actions"


// const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&'

// export const getCurrencies =  () => {
//     async  (dispatch) => {

//         try {
    
//             // const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&'
    
//             dispatch(currencyRequestAC())
//             const response = await axios.get(url);
//             console.log(response)
    
//             dispatch(currencySuccessAC(response.data))
//             console.log(response.data.results)
//         }
    
//         catch (err) {
//             dispatch(currencyErrorAC(err))
//         }
//     }
// } 