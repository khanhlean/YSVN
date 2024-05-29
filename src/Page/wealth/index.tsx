import React from 'react'
import ThongTin from './ThongTin/ThongTin';
import DienBien from './DienBien/index';
import TyTrong from './TyTrong';
import KhuyenNghi from './KhuyenNghi';
import BaoCao from './BaoCao';


type Props = {}

export default function HomePage({ }: Props) {

    return (
        <div style={{ backgroundColor: "#0a1d42" }} className='pl-20 h-full w-full'>
            <ThongTin />

            <DienBien />

            <TyTrong />

            <KhuyenNghi />

            <BaoCao />
        </div>
    )
}
