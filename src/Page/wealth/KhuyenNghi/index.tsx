import * as React from 'react';

function createData(
    ngay: string,
    maCK: string,
    congTy: string,
    san: string,
    lenh: string,
    gia: number,
    tyTrong: string,
    khoiLuong: number,
    loiNhuan: string
) {
    return { ngay, maCK, congTy, san, lenh, gia, tyTrong, khoiLuong, loiNhuan };
}

const rows = [
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Mua", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Bán", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Mua", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Mua", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Bán", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Bán", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Mua", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Mua", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Bán", 38600, "30.00%", 7700, "NA"),
    createData('15/02/2023', 'SMC', "Đầu tư & TM SMC", "HOSE", "Bán", 38600, "30.00%", 7700, "NA"),
];

export default function KhuyenNghi() {
    return (
        <div className='p-6 rounded-lg'>
            <div className='bg-[#000e29] p-8 rounded-lg'>
                <div className='text-gray-400 text-2xl mb-7'>LỊCH SỬ KHUYẾN NGHỊ</div>
                <table className='w-full'>
                    <thead className='bg-[#0c1f45] h-8'>
                        <tr className=''>
                            <th className=' w-1/12 text-white text-center font-medium'>Ngày</th>
                            <th className=' w-1/12 text-white text-center font-medium'>Mã CK</th>
                            <th className=' w-2/12 text-white text-center font-medium '>Công ty</th>
                            <th className=' w-1/12 text-white text-center font-medium '>Sàn</th>
                            <th className=' w-1/12 text-white text-center font-medium '>Lệnh</th>
                            <th className=' w-1/12 text-white text-center font-medium '>Giá</th>
                            <th className=' w-1/12 text-white text-center font-medium '>Tỷ trọng</th>
                            <th className=' w-1/12 text-white text-center font-medium '>Khối lượng</th>
                            <th className=' w-1/12 text-white text-right font-medium pr-8 '>Lợi nhuận</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        {rows.map((item, index) => {
                            return <tr className='border-y-[1px] border-y-gray-600 text-gray-400 h-10' style={{ backgroundColor: `${index % 2 === 0 ? "none" : "#0c1f45"}` }}>
                                <td className='text-center text-sm'>{item.ngay}</td>
                                <td className=' text-center text-sm'>{item.maCK}</td>
                                <td className=' text-center text-sm '>{item.congTy}</td>
                                <td className=' text-center text-sm '>{item.san}</td>
                                <td className=' text-center' style={{ color: `${item.lenh === "Mua" ? "green" : "#936d48"}` }}>{item.lenh}</td>
                                <td className=' text-center text-sm '>{item.gia}</td>
                                <td className=' text-center text-sm '>{item.tyTrong}</td>
                                <td className=' text-center text-sm '>{item.khoiLuong}</td>
                                <td className=' text-right pr-8 text-sm '>{item.loiNhuan}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}