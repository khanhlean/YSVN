import React from 'react'
import { Box, styled, Grid, Paper, Stack, } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

type Props = {}

export default function TinHieu({ }: Props) {
    return (
        <div className='w-full grid grid-cols-2 gap-5 my-4'>
            <div className='border-2 border-[#39C85E] h-[90px] w-full flex items-center rounded-md' >
                <div className='px-5 flex items-center w-2/5'>
                    <BackupIcon sx={{ color: "#39C85E", width: "50px", height: "50px" }} />
                    <span className='text-[#39C85E] text-xl font-bold ml-2'>TÍN HIỆU MUA</span>
                </div>
                <div className='flex content-center justify-around w-1/2' >
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                </div>
            </div>

            <div className='border-2 border-[#EA4245] h-[90px] w-full flex items-center rounded-md' >
                <div className='px-5 flex items-center w-2/5'>
                    <CloudDownloadOutlinedIcon sx={{ color: "#EA4245", width: "50px", height: "50px" }} />
                    <span className='text-[#EA4245] text-xl font-bold ml-2'>TÍN HIỆU MUA</span>
                </div>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "space-around", width: "50%" }}>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                    <div className='text-white text-xl font-semibold hover:bg-gray-800 px-8 py-2' >BCG</div>
                </div>
            </div>
        </div>
    )
}