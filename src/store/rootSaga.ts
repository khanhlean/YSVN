import { all } from "redux-saga/effects";
import authSaga from "../Page/Auth/Saga/authSaga";
import { stockRatingSaga } from "../Page/stockrating/Saga/Stockrating.saga";

function* rootSaga() {
    yield all([
        authSaga(),
        stockRatingSaga(),
    ])
}

export default rootSaga