import React from 'react'
import TableTitle from '../TableTitle'
import TableBody from '../TableBody'

type Props = {}

export default function CDKTTable({ }: Props) {
    return (
        <>
            <table id='myTable' className=' max-w-[1371px] mb-10 w-full border-gray-300'>
                <TableTitle Title={'CÂN ĐỐI KẾ TOÁN'} />

                <TableBody start={14} end={34} bold={[0,6,19,18,10,11,14]}/>
            </table >
        </>
    )
}