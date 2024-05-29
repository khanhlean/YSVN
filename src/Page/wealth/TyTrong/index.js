import React from 'react'
import ChartTT from './Chart'

export default function TyTrong() {

    const data = [
        {
            name: "Công nghệ thông tin L1", number: "30,00%", color: "orange", value: [{
                maCK: "FPT", san: "HOSE", thayDoi: "3%", KLGD: 127900, vonHoa: "82.587", beta: "0.98", ROE: "44%", PE: "14.6x", giaTT: "91.100", tyTrong: "30.00%", baoCao: "FPT",
            }]
        },
        {
            name: "Ngân hàng L1", number: "26,76%", color: "#e67e22", value: [{
                maCK: "MBB", san: "HOSE", thayDoi: "3%", KLGD: 127900, vonHoa: "82.587", beta: "0.98", ROE: "44%", PE: "14.6x", giaTT: "91.100", tyTrong: "30.00%", baoCao: "MBB",
            }]
        },
        {
            name: "Dược phẩm và Y tế L1", number: "14,53%", color: "yellow", value: [{
                maCK: "TNH", san: "HOSE", thayDoi: "3%", KLGD: 127900, vonHoa: "82.587", beta: "0.98", ROE: "44%", PE: "14.6x", giaTT: "91.100", tyTrong: "30.00%", baoCao: "TNH",
            }]
        },
        {
            name: "Nguyên vật liệu L1", number: "28,72%", color: "#2ecc71", value: [{
                maCK: "SMC", san: "HOSE", thayDoi: "3%", KLGD: 127900, vonHoa: "82.587", beta: "0.98", ROE: "44%", PE: "14.6x", giaTT: "91.100", tyTrong: "30.00%", baoCao: "SMC",
            }, {
                maCK: "DPM", san: "HOSE", thayDoi: "3%", KLGD: 127900, vonHoa: "82.587", beta: "0.98", ROE: "44%", PE: "14.6x", giaTT: "91.100", tyTrong: "30.00%", baoCao: "DPM",
            }]
        },
    ]

    return (
        <div className='p-6'>
            <div className='grid grid-cols-4 gap-6 max-h-[720px]'>
                <div className='col-span-1 bg-[#000e29] rounded-lg'>
                    <div className='text-2xl text-gray-400 p-7'>TỶ TRỌNG THEO NGÀNH</div>
                    <ChartTT />
                </div>
                <div className='col-span-3 bg-[#000e29] rounded-lg p-5'>

                    {data.map((item, index) => {
                        return <div className='mb-8'>
                            <div className='flex justify-between my-1'>
                                <div className=' w-full flex items-center'>
                                    <div className={`h-6 w-6 mx-5 rounded `} style={{ backgroundColor: `${item.color}` }} ></div>
                                    <div className="text-gray-300 text-base">{item.name}</div>
                                </div>
                                <div className='pr-40' style={{color:`${item.color}`}}>{item.number}</div>
                            </div>

                            <table className='table-auto w-full'>
                                <thead className='border-y-[1px] h-8 px-5 bg-[#0c1f45]'>
                                    <tr>
                                        <th className='text-gray-400'>Mã CK</th>
                                        <th className='text-gray-400'>Sàn</th>
                                        <th className='text-gray-400'>% Thay đổi</th>
                                        <th className='text-gray-400 col-span-2 w-40 '>KLGB BQ 20 phiên</th>
                                        <th className='text-gray-400'>Vốn hoá</th>
                                        <th className='text-gray-400'>Beata 6th</th>
                                        <th className='text-gray-400'>ROE</th>
                                        <th className='text-gray-400'>P/E</th>
                                        <th className='text-gray-400'>Giá TT</th>
                                        <th className='text-gray-400'>Tỷ trọng</th>
                                        <th className='text-gray-400'>Báo cáo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.value.map((a) => {
                                        return <tr className='border-y-[1px] h-11 text-center'>
                                            <td className='text-gray-400'>{a.maCK}</td>
                                            <td className='text-gray-400'>{a.san}</td>
                                            <td className='text-gray-400'>{a.thayDoi}</td>
                                            <td className='text-gray-400 col-span-2 '>{a.KLGD}</td>
                                            <td className='text-gray-400'>{a.vonHoa}</td>
                                            <td className='text-gray-400'>{a.beta}</td>
                                            <td className='text-gray-400'>{a.ROE}</td>
                                            <td className='text-gray-400'>{a.PE}</td>
                                            <td className='text-gray-400'>{a.giaTT}</td>
                                            <td className='text-gray-400'>{a.tyTrong}</td>
                                            <td className='text-orange-600'>
                                                <p className=' border-b-[1px] border-b-orange-600 relative w-8 left-1/2'>{a.baoCao}</p>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    })}


                </div>
            </div>
        </div>
    )
}
