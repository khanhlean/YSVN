import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { authAction } from './Saga/authSlice';
import { RootState } from '../../store';

type Props = {}

type pwd = number | string

interface FormRegister {
    user_name: string,
    phone_number: number,
    email: string,
    pass_word: string | number
}

export default function Register({ }: Props) {
    const dispatch = useAppDispatch()
    const navigate: any = useNavigate()
    const { data, loading } = useAppSelector((state: RootState) => state.auth)

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordComfirm, setShowPasswordComfirm] = useState(false);
    const [passwordComfirm, setPassWordComfirm] = useState<pwd>()
    const [error, setError] = useState(false)

    const [form, setForm] = useState<FormRegister>({ user_name: '', email: '', pass_word: '', phone_number: 0 })

    useEffect(() => {
        if (form.pass_word !== passwordComfirm) {
            setError(true)
        } else setError(false)
    }, [passwordComfirm])

    useEffect(() => {
        if (data) {
            setTimeout(() => {
                navigate('/login', { replace: true })
            }, 1000)
        }
    }, [data])

    const handleComfirm = (e: any) => {
        setPassWordComfirm(e.target.value)
        checkPassWordComfirm()
    }

    const checkPassWordComfirm = () => {
        if (passwordComfirm !== form.pass_word) {
            setError(true)
        } else setError(false)
    }

    const handleChange = (e: any) => {
        let { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        dispatch(authAction.registerRequest(form))
    }

    return (
        <section className="bg-[#0a1d42] ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-[#26385a] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="text-[30px] text-center font-bold leading-tight tracking-tight text-gray-300 ">
                            Đăng Ký
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e: any) => handleSubmit(e)}>
                            <div>
                                <label htmlFor="ten" className="block mb-2 text-sm font-medium text-gray-300">Họ và tên</label>
                                <input onChange={(e: any) => handleChange(e)} type="text" name="user_name" id="user_name" className="bg-[#26385a] border-b-2 border-gray-300 text-gray-300 sm:text-sm focus:ring-primary-600 focus:border-blue-600 focus:outline-none block w-full p-2.5 " placeholder="Nguyễn Văn A" required />
                            </div>
                            <div>
                                <label htmlFor="sdt" className="block mb-2 text-sm font-medium text-gray-300">Số điện thoại</label>
                                <input onChange={(e: any) => handleChange(e)} type="number" name="phone_number" id="phone_number" className="bg-[#26385a] border-b-2 border-gray-300 text-gray-300 sm:text-sm focus:ring-primary-600 focus:border-blue-600 focus:outline-none block w-full p-2.5 " placeholder="090xxxxxxx" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Địa chỉ Email</label>
                                <input onChange={(e: any) => handleChange(e)} type="email" name="email" id="email" className="bg-[#26385a] border-b-2 border-gray-300 text-gray-300 sm:text-sm focus:ring-primary-600 focus:border-blue-600 focus:outline-none block w-full p-2.5 " placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Mật khẩu</label>
                                <div className='flex items-center'>
                                    <input onChange={(e: any) => handleChange(e)} type={showPassword ? 'text' : 'password'} name="pass_word" id="pass_word" placeholder='••••••••' className="relative bg-[#26385a] border-b-2 border-gray-300 duration-300 text-white sm:text-sm focus:border-b-2 focus:border-blue-600 outline-none  block w-full p-2.5" required />
                                    {
                                        showPassword ?
                                            <EyeOutlined onClick={() => setShowPassword(!showPassword)} className='absolute right-[37%] text-white hover:bg-gray-900 p-1.5 rounded-full duration-300 cursor-pointer' />
                                            :
                                            <EyeInvisibleOutlined onClick={() => setShowPassword(!showPassword)} className='absolute right-[37%] text-white hover:bg-gray-900 p-1.5 rounded-full duration-300 cursor-pointer' />
                                    }
                                </div>
                            </div>
                            <div>
                                <label htmlFor="comfirm-password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Xác nhận mật khẩu</label>
                                <div className='flex items-center'>
                                    <input onBlur={checkPassWordComfirm} onChange={(e) => handleComfirm(e)} type={showPasswordComfirm ? 'text' : 'password'} name="comfirm-password" id="comfirm-password" placeholder='••••••••' className="relative bg-[#26385a] border-b-2 border-gray-300 duration-300 text-white sm:text-sm focus:border-b-2 focus:border-blue-600 outline-none  block w-full p-2.5" required />
                                    {
                                        showPasswordComfirm ?
                                            <EyeOutlined onClick={() => setShowPasswordComfirm(!showPasswordComfirm)} className='absolute right-[37%] text-white hover:bg-gray-900 p-1.5 rounded-full duration-300 cursor-pointer' />
                                            :
                                            <EyeInvisibleOutlined onClick={() => setShowPasswordComfirm(!showPasswordComfirm)} className='absolute right-[37%] text-white hover:bg-gray-900 p-1.5 rounded-full duration-300 cursor-pointer' />
                                    }
                                </div>
                                {error ? !passwordComfirm ? <div className='text-red-500 text-sm'>Vui lòng nhập mật khẩu xác nhận!</div> : <div className='text-red-700'>Xác nhận mặt khẩu không đúng!</div> : ''}
                            </div>

                            <button type="submit" disabled={error ? true : false} className={`${error ? 'cursor-not-allowed bg-gray-400' : ''} w-full text-white bg-[#ff5500] hover:bg-[#ff5500d8] duration-300  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800`}>Xác nhận</button>
                            <p className="text-sm font-light text-white">
                                Bạn đã có tài khoản? <NavLink to='/login' className="font-medium text-[#ff5500] hover:underline dark:text-primary-500">Đăng nhập</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}