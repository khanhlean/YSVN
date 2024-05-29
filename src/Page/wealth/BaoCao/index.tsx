import React from 'react'

type Props = {}

export default function BaoCao({ }: Props) {

    function createData(
        chiSo: string | null,
        Portfolio: string,
        VNINDEX: number | null
    ) {
        return { chiSo, Portfolio, VNINDEX };
    }

    const table1 = [
        createData('Ngày bắt đầu', '159', null),
        createData('Lợi suất kỳ vọng', '237', 9.0),
        createData('Tỷ suất cổ tức', '7.5%', 16.0,),
        createData('P/E TTM', '305', 3.7),
        createData('F PE 2021', '356', 16.0),
        createData('P/B', '356', 16.0),
        createData('% tiền mặt', '1.1%', null),
    ];

    const table2 = [
        createData('Ngày bắt đầu', '159', null),
        createData('Lợi suất kỳ vọng', '237', 9.0),
        createData('Tỷ suất cổ tức', '7.5%', 16.0,),
        createData('P/E TTM', '305', 3.7),
    ];

    const table3 = [
        createData('Ngày bắt đầu', '159', null),
        createData('Lợi suất kỳ vọng', '237', 9.0),
        createData('Tỷ suất cổ tức', '7.5%', 16.0,),
    ];
    return (
        <div className='px-6 pb-10'>
            <div className='px-7 rounded-lg pb-10 bg-[#000e29]'>
                <div className='text-xl py-5 text-gray-400'>BÁO CÁO DANH MỤC | 17/06/2023</div>
                <div className='grid grid-cols-3 gap-10'>
                    <div >
                        <table className='w-full '>
                            <thead className='bg-[#0066b3] h-8'>
                                <tr className=''>
                                    <th className='w-3/7 text-white text-base font-medium text-left px-4'>Chỉ số cơ bản</th>
                                    <th className='w-2/7 text-white text-base font-medium text-center '>Portfolio</th>
                                    <th className='w-2/7 text-white text-base font-medium text-center '>VNINDEX</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                {table1.map((item, index) => {
                                    return <tr className='border-y-[1px] border-y-gray-600 text-gray-400 h-10' style={{ backgroundColor: `${index % 2 === 0 ? "none" : "#0c1f45"}` }}>
                                        <td className='text-left px-4'>{item.chiSo}</td>
                                        <td className=' text-center'>{item.Portfolio}</td>
                                        <td className=' text-center  text-green-600'>{item.VNINDEX}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table className='w-full '>
                            <thead className='bg-[#0066b3] h-8'>
                                <tr className=''>
                                    <th className='w-3/7 text-white text-base font-medium text-left px-4'>Chỉ số cơ bản</th>
                                    <th className='w-2/7 text-white text-base font-medium text-center '>Portfolio</th>
                                    <th className='w-2/7 text-white text-base font-medium text-center '>VNINDEX</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                {table2.map((item, index) => {
                                    return <tr className='border-y-[1px] border-y-gray-600 text-gray-400 h-10' style={{ backgroundColor: `${index % 2 === 0 ? "none" : "#0c1f45"}` }}>
                                        <td className='text-left px-4'>{item.chiSo}</td>
                                        <td className=' text-center'>{item.Portfolio}</td>
                                        <td className=' text-center  text-green-600'>{item.VNINDEX}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div >
                        <table className='w-full '>
                            <thead className='bg-[#0066b3] h-8'>
                                <tr className=''>
                                    <th className='w-3/7 text-white text-base font-medium text-left px-4'>Chỉ số cơ bản</th>
                                    <th className='w-2/7 text-white text-base font-medium text-center '>Portfolio</th>
                                    <th className='w-2/7 text-white text-base font-medium text-center '>VNINDEX</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                {table3.map((item, index) => {
                                    return <tr className='border-y-[1px] border-y-gray-600 text-gray-400 h-10' style={{ backgroundColor: `${index % 2 === 0 ? "none" : "#0c1f45"}` }}>
                                        <td className='text-left px-4'>{item.chiSo}</td>
                                        <td className=' text-center'>{item.Portfolio}</td>
                                        <td className=' text-center  text-green-600'>{item.VNINDEX}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}