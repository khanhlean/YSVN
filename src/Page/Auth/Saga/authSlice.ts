import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as TypesAuth from '../types'
import { RootState } from "../../../store";


const initialState: TypesAuth.AuthState = {
    loading: false,
    data: null,
    error: null,
    isCheck: false,
    checkToken: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state: TypesAuth.AuthState, action: PayloadAction<TypesAuth.Logging>) => {
            state.loading = true
        },
        loginSuccess: (state: TypesAuth.AuthState, action: PayloadAction<TypesAuth.Logging>) => {
            state.loading = false
            state.data = action.payload
        },
        loginFail: (state: TypesAuth.AuthState, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        },
        registerRequest: (state: TypesAuth.AuthState, action: PayloadAction<TypesAuth.DataRegister>) => {
            state.loading = true
        },
        registerSuccess: (state: TypesAuth.AuthState, action: PayloadAction<TypesAuth.User>) => {
            state.loading = false
            state.data = action.payload
        },
        registerFail: (state: TypesAuth.AuthState, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        },
        checkEmailForgotPasswordRequest: (state: TypesAuth.AuthState, action: PayloadAction<any>) => {
            state.loading = true
        },
        checkEmailForgotPasswordSuccess: (state: TypesAuth.AuthState, action: PayloadAction<any>) => {
            state.loading = false
            state.isCheck = true
            state.error = null
        },
        checkEmailForgotPasswordFail: (state: TypesAuth.AuthState, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
            state.isCheck = false
        },
        checkOTP: (state: TypesAuth.AuthState, action: PayloadAction<any>) => {
            state.checkToken = action.payload
        },
        showLoading: (state: TypesAuth.AuthState) => {
            state.loading = true
        },
        hideLoading: (state: TypesAuth.AuthState) => {
            state.loading = false
        },
    }
})

const authReducer = authSlice.reducer
export default authReducer

export const authAction = authSlice.actions

export const SelectorAuth = (state: RootState) => state.auth