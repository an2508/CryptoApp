import currenciesReducer from "./currencyReducer";
import { combineReducers } from 'redux'

export const rootReducer = combineReducers(
   {

      currencies: currenciesReducer,
   }
)