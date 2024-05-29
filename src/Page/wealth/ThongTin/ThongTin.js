import React from 'react'

import TableCK from './TableCK';
import LogoNDanhMuc from './Logo&DanhMuc';
import PhanBoTyTrong from './PhanBoTyTrong';

export default function ThongTin() {

    return (
        <div className='flex gap-5 p-5 w-full'>

            <LogoNDanhMuc />

            <PhanBoTyTrong />

            <TableCK />
        </div>
    )
}
