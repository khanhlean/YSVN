import { call, takeLatest, put, delay } from "redux-saga/effects";
import { authAction } from "./authSlice";
import api from "../../../Utils/fectAPI";
import { PayloadAction } from "@reduxjs/toolkit";
import { DataRegister, Logging, Response, User } from "../types";

import React from "react";

function* handleLogin(data: PayloadAction<Logging>) {
  try {
    const response: Response<Logging> = yield call(async () =>
      await api.post("/auth/login", data.payload)
    );
    if (response.statusCode === 200) {
      yield put(authAction.loginSuccess(response.data));
    } else {
      yield put(authAction.loginFail(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleRegister(data: PayloadAction<DataRegister>) {
  try {
    const { phone_number } = data.payload;
    const data1 = { ...data.payload, phone_number: Number(phone_number) };
    const response: Response<User> = yield call(async () =>
      await api.post("/auth/register", data1)
    );
    if (response.statusCode === 200) {
      yield put(authAction.registerSuccess(response.data));
    } else {
      yield put(authAction.registerFail(response.data));
    }

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* handleCheckMailForgetPwd(action: PayloadAction<any>) {
  const { email } = action.payload
  try {
    const response: Response<any> = yield call(async () => await api.post(`/auth/check-mail/${email}`))
    console.log(response)
    if (response.statusCode === 200) {
      yield put(authAction.checkEmailForgotPasswordSuccess(response.message))
    } else {
      yield put(authAction.checkEmailForgotPasswordFail(response.message))
    }
  } catch (error) {
    console.log(error)
  }
}

function* handleCheckOtp(action: PayloadAction<any>) {
  console.log(action.payload)
  try {
    yield delay(500)
    yield put(authAction.showLoading())
    const response: Response<any> = yield call(async () => await api.post(`/auth/check-otp`, action.payload))
    console.log(response)
    if (response.statusCode === 200) {
      yield put(authAction.checkOTP(true))
      yield put(authAction.hideLoading())
    } else {
      yield put(authAction.checkOTP(false))
      yield put(authAction.hideLoading())
    }
  } catch (error) {
    console.log(error)
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.loginRequest.type, handleLogin);
  yield takeLatest(authAction.registerRequest.type, handleRegister);
  yield takeLatest(authAction.checkEmailForgotPasswordRequest.type, handleCheckMailForgetPwd);
  yield takeLatest(authAction.checkOTP.type, handleCheckOtp);
}
