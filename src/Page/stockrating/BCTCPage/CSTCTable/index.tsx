import React from 'react'
import TableTitle from '../TableTitle'
import TableBody from '../TableBody'

type Props = {}

export default function CSTCTable({ }: Props) {
    return (
        <table id='myTable' className=' max-w-[1371px] mb-10 w-full border-gray-300'>
            <TableTitle Title={'CHỈ SỐ TÀI CHÍNH'} />

            <TableBody start={34} end={46} donVi={[1,1,2,2,3,3,3,3,2,2,3,3]} />
        </table >
    )
}