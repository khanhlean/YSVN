import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Page/Auth/Saga/authSlice";
import stockRatingReducer from "../Page/stockrating/Saga/stockRatingSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    stockRating: stockRatingReducer
})

export default rootReducer