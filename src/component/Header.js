import React from 'react'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Header() {
    return (
        <div style={{backgroundColor:"#000e29"}} className='flex justify-between h-20 w-full z-20'>
            <div className='flex pl-24 items-center'>
                <div className='text-white text-lg px-5 font-semibold'>DANH MỤC </div>
                <div className='text-blue-500 px-10 font-bold rounded py-2 bg-white text-lg'>AN TOÀN</div>
            </div>

            <div className='flex items-center'>
                <div className='border border-white flex items-center justify-between'>
                    <LanguageOutlinedIcon sx={{ width: "26px", height: "26px", margin: "8px 8px 10px 12px", color: "white" }} />
                    <div className='text-white text-base mr-5'>Tiếng Việt</div>
                    <ArrowDropDownIcon sx={{ color: "white", margin: "8px 0" }} />
                </div>

                <div className='border border-white flex items-center justify-between mx-3'>
                    <AccountCircleIcon sx={{ width: "26px", height: "26px", margin: "8px 8px 10px 12px", color: "white" }} />
                    <div className='text-white text-base mr-5'>Hi, Vương</div>
                    <ArrowDropDownIcon sx={{ color: "white", margin: "8px 0" }} />
                </div>
            </div>
        </div>
    )
}
