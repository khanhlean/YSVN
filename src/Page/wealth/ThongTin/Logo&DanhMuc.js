import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

export default function LogoNDanhMuc() {
    return (
        <div className='col-span-2 grid grid-rows-5 gap-5 h-[340px] w-[290px]'>
            <div className='bg-red-300 rounded-lg row-span-2'>logo</div>
            <div className='rounded-lg row-span-3 text-white p-5 bg-[#000e29]' >
                <div className=' text-gray-400'>DANH MỤC KHUYẾN NGHỊ</div>
                <div className='py-2 text-sm'>Số tiền đầu tư từ ngày dd/mm/yyyy</div>
                <div className='bg-white w-full p-1 flex justify-between items-center rounded-md'>
                    <div className='text-blue-400 '>200.000 Đ</div>
                    <EditIcon sx={{color:"black", fontSize:18}} />
                </div>
                <div className='py-1'>
                    <span className='text-sm'>Số lượng CP trong danh mục: </span><span className='font-bold text-sm'> 5</span>
                </div>
                <div className=''>
                    <span className='text-sm'>Ngày cập nhật danh mục: </span><span className='font-bold text-sm'> dd/mm/yyyy</span>
                </div>
            </div>
        </div>
    )
}
