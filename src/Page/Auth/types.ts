export interface AuthState {
    loading: boolean,
    data: any,
    error: any,
    isCheck: boolean | any,
    checkToken: boolean | any,
}

export interface Logging {
    email: string,
    pass_word: string | number
}

export interface Response<T> {
    access_token: string,
    data: T,
    statusCode: number,
    message: string
}

export interface User {
    user_name: string,
    email: string,
    phone_number: number,
}

export interface DataRegister {
    user_name: string,
    phone_number: number,
    email: string,
    pass_word: string | number,
    navigate?: any
}