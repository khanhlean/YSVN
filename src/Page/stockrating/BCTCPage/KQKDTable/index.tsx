import React from 'react';
import TableTitle from '../TableTitle';
import TableBody from '../TableBody';

type Props = {};

export default function KQKDTable({}: Props) {
    return (
        <>
            <table id="myTable" className=" !max-w-[1371px] !w-[1371px] mb-10 border-gray-300">
                <TableTitle Title={'KẾT QUẢ KINH DOANH'} />

                <TableBody start={0} end={14} bold={[0, 2, 7, 10, 11, 12]} />
            </table>
        </>
    );
}
