import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ComposedChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import moment from 'moment';
import { stockRatingAct } from '../Saga/stockRatingSlice';

type Props = {
    dataGetCrr?: any,
    dataGetFinance?: any,
    index?: any
}

const MiniChart = (props: Props) => {

    let { dataGetCrr, dataGetFinance, index } = props
    let data1: any[] = []

    const { ReportTermType } = useAppSelector((state: RootState) => state.stockRating)

    dataGetCrr = dataGetCrr?.map((item: any, i: any) => {
        let a = { name: '', value: null }
        a = { ...a, value: dataGetFinance[index][i] }
        if (ReportTermType === 2) {
            a = { ...a, name: `${item?.termcode}/${item?.yearperiod}` }
            return a
        }
        return a = { ...a, name: item.yearperiod }
    })

    dataGetCrr = dataGetCrr?.reverse()

    return (
        <>
            <div className='mt-10 text-white flex justify-center items-center mr-10'>
                <ComposedChart width={300} height={170} data={dataGetCrr} >
                    <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        strokeDasharray="1 1" />
                    <XAxis
                        height={50}
                        tickLine={false}
                        padding={{ left: 10 }}
                        fontSize={9}
                        axisLine={false}
                        tick={{ fill: 'white' }}
                        dataKey="name" />
                    <YAxis
                        type="number"
                        tickLine={false}
                        tickCount={2}
                        fontSize={9}
                        tick={{ fill: 'white' }}
                        axisLine={false}
                    />
                    <Tooltip contentStyle={{ backgroundColor: '#262626' }} />
                    <Bar dataKey='value' fill="#68C2ED" />
                </ComposedChart>
            </div>
        </>
    )
}

export default MiniChart