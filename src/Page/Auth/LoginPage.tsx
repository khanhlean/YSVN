import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink, NavigationType, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { authAction } from './Saga/authSlice';
import rootSaga from '../../store/rootSaga';
import { RootState } from '../../store';


type Props = {}

interface FormLogin {
    email: string,
    pass_word: string | number
}

export default function LoginPage({ }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [formLogin, setFormLogin] = useState<FormLogin>({ email: '', pass_word: '' });
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state: RootState) => state.auth)
    const navigate: any = useNavigate()

    useEffect(() => {
        if (data) {
            setTimeout(() => {
                navigate('/stockrating', { replace: true })
            }, 1000)
        }
    }, [data])

    const handleChange = (e: any) => {
        let { name, value } = e.target
        setFormLogin({ ...formLogin, [name]: value })
    }

    const handleLogin = (e:Event) => {
        e.preventDefault()
        dispatch(authAction.loginRequest(formLogin))
    }



    return (
        <section className="bg-[#0a1d42] ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-[#0a1d42] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 shadow-xl bg-[#26385a] rounded-2xl md:space-y-6 sm:p-8">
                        <div className="text-4xl font-bold leading-tight tracking-tight text-center text-gray-300 md:text-2xl dark:text-white">
                            Đăng nhập
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Số điện thoại/Email</label>
                                <input onChange={(e) => handleChange(e)} type="email" name="email" id="email" className="bg-[#26385a] border-b-2 border-gray-300 duration-300 text-white sm:text-sm focus:border-b-2 focus:border-blue-600 outline-none  block w-full p-2.5 " placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Mật khẩu</label>

                                <div className='flex items-center'>
                                    <input type={showPassword ? 'text' : 'password'} onChange={(e) => handleChange(e)} name="pass_word" id="password" placeholder='••••••••' className="relative bg-[#26385a] border-b-2 border-gray-300 duration-300 text-white sm:text-sm focus:border-b-2 focus:border-blue-600 outline-none  block w-full p-2.5" required />
                                    {
                                        showPassword ?
                                            <EyeOutlined onClick={() => setShowPassword(!showPassword)} className='absolute right-[37%] text-white hover:bg-gray-900 p-1.5 rounded-full duration-300 cursor-pointer' />
                                            :
                                            <EyeInvisibleOutlined onClick={() => setShowPassword(!showPassword)} className='absolute right-[37%] text-white hover:bg-gray-900 p-1.5 rounded-full duration-300 cursor-pointer' />
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-white dark:text-gray-300">Ghi nhớ tài khoản</label>
                                    </div>
                                </div>
                                <NavLink to='/forget-password' className="text-sm font-medium text-[#ff5500]  duration-300 dark:text-primary-500">Quên mật khẩu?</NavLink>
                            </div>
                            <button type="submit"
                                onClick={(e:any)=>handleLogin(e)}
                                className="w-full outline-none active:outline-none right-0 relative text-white bg-[#ff5500] hover:bg-[#ff5500d8] duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >Đăng nhập</button>
                            <p className="text-sm font-light text-white dark:text-gray-400">
                                Bạn chưa có tài khoản? <NavLink to="/register" className="font-medium text-[#ff5500] hover:underline hover:text-white">Đăng ký</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}