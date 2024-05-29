import React, { useEffect, useState } from 'react';
import { InputAdornment } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Select } from 'antd';
import './style.css';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { stockRatingAct } from './Saga/stockRatingSlice';
import { RootState } from '../../store';
import Loading from '../../component/loading';

type Props = {};

export default function ThongTin({}: Props) {
    const dispatch = useAppDispatch();
    let data: any = [];
    const { dataStockCode, loading, dataStockById } = useAppSelector((state: RootState) => state.stockRating);
    const [stockCode, setStockCode] = useState({ code: '', name: '' });
    const [stockId, setStockId] = useState(null);
    useEffect(() => {
        dispatch(stockRatingAct.getStockCodeRequest());
        dispatch(stockRatingAct.getStockByIdRequest(1));
    }, []);

    data = dataStockCode?.map((cp: any) => {
        return {
            value: cp.StockID,
            label: `${cp.StockCode}:  ${cp.StockName}`,
            name: cp.StockName,
        };
    });

    if (loading) return <Loading />;

    return (
        <>
            <div className="py-5 w-auto bg-[#262626] flex justify-between rounded-lg mb-4 ">
                <div className="w-[70%] flex">
                    <div className="flex items-center justify-center min-w-[150px]">
                        <div className="bg-heart rounded-full bg-none border border-orange-600 w-12 h-12 flex items-center justify-center ml-6 hover:bg-orange-600">
                            <FavoriteBorderIcon className="text-white heart-hover" />
                        </div>
                        <div className="ml-6 ">
                            <div className="text-sm text-white">Mã CP</div>
                            <div className="text-lg font-semibold text-white">{dataStockById?.StockCode}</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center ">
                        <div className="ml-6 min-w-[380px] border-x border-[#576072]">
                            <div className="ml-6">
                                <div className="text-sm text-white">Tên Công ty</div>
                                <div className="text-lg font-semibold text-white">{dataStockById?.StockName}</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center min-w-[130px]">
                        <div className="ml-6 ">
                            <div className="mx-6">
                                <div className="text-sm text-white">Sàn GD</div>
                                <div className="text-lg font-semibold text-white">HOSE</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center min-w-[210px]">
                        <div className="ml-6 " style={{ borderLeft: '1px solid #576072' }}>
                            <div className="ml-6">
                                <div className="text-sm text-white flex items-center ">
                                    <FolderOutlinedIcon sx={{ width: '15px', height: '15px' }} />
                                    <span className="ml-3">Danh mục</span>
                                </div>

                                <div className=" font-normal flex" style={{ color: '#E76224' }}>
                                    <div className="mr-5">VN30</div>
                                    <div>VNDIAMOND</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-3 bg-red flex items-center justify-between w-[30%]">
                    <div></div>
                    <div className="w-full">
                        <Select
                            className="w-full h-10 text-white bg-[#111111] rounded-md"
                            showSearch
                            bordered={false}
                            suffixIcon={<></>}
                            defaultValue={`${dataStockById?.StockCode}: ${dataStockById?.StockName}`}
                            onChange={(value: any) => dispatch(stockRatingAct.getStockByIdRequest(value))}
                            placeholder={
                                <div className="text-gray-300">
                                    <SearchOutlinedIcon />
                                    Nhập mã cổ phiếu hoặc từ khóa{' '}
                                </div>
                            }
                            optionFilterProp="children"
                            filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA: any, optionB: any) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={data}
                        />
                        <div className="flex items-center mt-2">
                            <div className="text-base font-normal" style={{ color: '#A5ACBC' }}>
                                Tìm kiếm gần đây:{' '}
                            </div>
                            <div className="flex justify-around">
                                <div className="text-white mx-3">BHC</div>
                                <div className="text-white mx-3">BHC</div>
                                <div className="text-white mx-3">BHC</div>
                                <div className="text-white mx-3">BHC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
