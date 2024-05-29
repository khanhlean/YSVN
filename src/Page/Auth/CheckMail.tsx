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

export default function CheckMail({ }: Props) {
    const [time, setTime] = useState(90)
    const dispatch = useAppDispatch()

    //
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordComfirm, setShowPasswordComfirm] = useState(false);
    const [passwordComfirm, setPassWordComfirm] = useState()
    const [error, setError] = useState(false)
    const [form, setForm] = useState({ pass_word: '' })
    const [state, setState] = useState(false)

    //
    const [otp, setOTP] = useState({ otp: '' })

    const { data } = useAppSelector((state: RootState) => state.auth)
    const navigate: any = useNavigate()

    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(preTime => preTime - 1)
        }, 1000)
        return () => clearInterval(timeId)
    }, [])

    const handleChange = (e: any) => {
        const { value } = e.target
        setOTP({ ...otp, otp: value })
    }

    const handleAction = (e: Event) => {
        e.preventDefault()
        dispatch(authAction.checkOTP(otp))
        // setState(!state)
    }

    const handleComfirm = (e: any) => {
        setPassWordComfirm(e.target.value)
        checkPassWordComfirm()
    }

    const checkPassWordComfirm = () => {
        if (passwordComfirm !== form.pass_word) {
            setError(true)
        } else setError(false)
    }
    // if (time === 0) return navigate('/forget-password', { replace: true })

    return (
        <section className="bg-[#0a1d42] ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-[#0a1d42] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 shadow-xl bg-[#26385a] rounded-2xl md:space-y-6 sm:p-8">
                        <div className="text-4xl font-bold leading-tight tracking-tight text-center text-gray-300 md:text-2xl dark:text-white">
                            {state ? 'ĐỔI MẬT KHẨU' : 'KHÔI PHỤC MẬT KHẨU'}
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            {state ?
                                <div>
                                    <div className='mb-5'>
                                        <span className="block text-sm font-medium text-gray-300 dark:text-white">Mật khẩu mới <span className='text-red-700'>*</span></span>
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
                                    <div className='my-2'>
                                        <span className="block text-sm font-medium text-gray-300 dark:text-white">Xác nhận mật khẩu <span className='text-red-700'>*</span></span>
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
                                </div>
                                :
                                <div className='my-10'>
                                    <input onChange={(e) => handleChange(e)} type="text" name="code" id="code" className="bg-[#26385a] border-b-2 border-gray-300 duration-300 text-white sm:text-sm focus:border-b-2 focus:border-blue-600 outline-none  block w-full p-2.5 " placeholder="Nhập mã số trong email của bạn" required />
                                    {error && <div className='mt-3 text-red-600 text-base'>{error}</div>}
                                </div>
                            }

                            <div className=' right-0  mr-8 w-full flex items-center'>
                                <button type="submit"
                                    onClick={(e: any) => handleAction(e)}
                                    className="w-1/2 outline-none active:outline-none  text-white bg-[#ff5500] hover:bg-[#ff5500d8] duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >{state ? 'Thay đổi' : 'Xác nhận'}</button>

                                {!state && <div className='text-gray-300 text-sm ml-3'>Thời gian còn lại: <span className='text-lg text-red-600'>{time} </span>giây</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}