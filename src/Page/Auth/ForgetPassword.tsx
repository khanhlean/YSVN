import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink, NavigationType, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { authAction } from './Saga/authSlice';
import rootSaga from '../../store/rootSaga';
import { RootState } from '../../store';
import Loading from '../../component/loading';


type Props = {}

interface FormLogin {
    email: string,
    pass_word: string | number
}

export default function ForgetPassword({ }: Props) {
    const [email, setEmail] = useState({ email: '' });
    const dispatch = useAppDispatch()
    const { data, error, loading, isCheck } = useAppSelector((state: RootState) => state.auth)
    const navigate: any = useNavigate()

    useEffect(() => {
        if (isCheck) {
            navigate('/check-mail', { replace: true })
        }
    }, [isCheck])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setEmail({ ...email, [name]: value })
    }

    const handleForgetPassword = (e: Event) => {
        e.preventDefault()
        dispatch(authAction.checkEmailForgotPasswordRequest(email))
    }

    // if (loading) return <Loading />

    return (
        <>
            {/* <Loading /> */}
            {loading ? <Loading /> :
                <section className="bg-[#0a1d42] ">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-[#0a1d42] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 shadow-xl bg-[#26385a] rounded-2xl md:space-y-6 sm:p-8">
                                <div className="text-4xl font-bold leading-tight tracking-tight text-center text-gray-300 md:text-2xl dark:text-white">
                                    QUÊN MẬT KHẨU
                                </div>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div className='my-7'>
                                        <input onChange={(e) => handleChange(e)} type="email" name="email" id="email" className="bg-[#26385a] border-b-2 border-gray-300 duration-300 text-white sm:text-sm focus:border-b-2 focus:border-blue-600 outline-none  block w-full p-2.5 " placeholder="Nhập email của bạn" required />
                                        {error && <div className='mt-3 text-red-600 text-base'>{error}</div>}
                                        {/* <div className='text-red-600 mt-4'>tài khoản tồn tại</div> */}
                                    </div>
                                    <button type="submit"
                                        onClick={(e: any) => handleForgetPassword(e)}
                                        className="w-3/5 mr-8 outline-none active:outline-none right-0 text-white bg-[#ff5500] hover:bg-[#ff5500d8] duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >Khôi phục mật khẩu</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}