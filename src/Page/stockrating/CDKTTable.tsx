import { TableBody, TableContainer, TableHead, TableRow, TableCell, Table, Paper, Tooltip, Button } from '@mui/material'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {}

export default function CDKTPage({ }: Props) {
    const [state, setState] = useState(true)
    function createData(
        name: string,
        value1: string,
        value2: string,
        value3: string,
        value4: string,
        value5: string | any,
    ) {
        return { name, value1, value2, value3, value4, value5 };
    }
    const rows = [
        createData('Giai đoạn', "01/01 - 03/03", "01/01 - 03/03", "01/01 - 03/03", "01/01 - 03/03", "01/01 - 03/03"),
        createData('Hợp nhất', "01/01 - 03/03", "01/01 - 03/03", '37', ' 4.3', "01/01 - 03/03"),
        createData('Kiểm toán', '262', '16.0', '24', '6.0', "01/01 - 03/03"),
        createData('Công ty kiểm toán', '305', '3.7', '67', "01/01 - 03/03", "01/01 - 03/03"),
        createData('Ý kiến kiểm toán', '356', ' 16.0', '49', ' 3.9', "01/01 - 03/03"),
        createData('', '', '', '', '', '')
    ];

    const rows2 = [
        createData('Doanh thu thuần về bán hàng và cung cấp dịch vụ', '13,125', '13,125', '13,125', '13,125', '13,125'),
        createData('Giá vốn hàng bán', "01/01 - 03/03", "01/01 - 03/03", '37', ' 4.3', "01/01 - 03/03"),
        createData('Lợi nhuận gộp', '262', '16.0', '24', '6.0', "01/01 - 03/03"),
        createData('Doanh thu', '305', '3.7', '67', "01/01 - 03/03", "01/01 - 03/03"),
        createData('Chi phí', '356', ' 16.0', '49', ' 3.9', "01/01 - 03/03"),
    ];
    return (
        <TableContainer component={Paper} className='mt-2'>
            <Table sx={{ minWidth: 650, backgroundColor: "black" }} aria-label="simple table">
                <TableHead className='grid items-start'>
                    <TableRow >
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }}>CẦN ĐỐI KẾ TOÁN - VNM</TableCell>
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }}></TableCell>
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }} align="right">Q1/2022&nbsp;</TableCell>
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }} align="right">Q2/2022&nbsp;</TableCell>
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }} align="right">Q3/2022&nbsp;</TableCell>
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }} align="right">Q4/2022&nbsp;</TableCell>
                        <TableCell sx={{ color: "white", fontSize: 18, fontWeight: 700 }} align="right">Q1/2023&nbsp;</TableCell>
                    </TableRow>
                </TableHead>


                {state ?
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#262626" }}
                            >

                                <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} component="th" scope="col">{row.name}</TableCell>
                                <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">
                                    {row.name === '' ? '' :
                                        <Tooltip title="..." placement="top">
                                            <ErrorOutlineOutlinedIcon />
                                        </Tooltip>
                                    }
                                </TableCell>
                                <TableCell className='isHover' sx={{ color: "#A5ACBC", fontSize: 18, "&:hover &:first-child td": { backgroundColor: "black" } }} align="right"  > {row.value1}</TableCell>
                                <TableCell className='isHover' sx={{ color: "#A5ACBC", fontSize: 18 }} scope="col" align="right">{row.value2}</TableCell>
                                <TableCell className='isHover' sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">{row.value3}</TableCell>
                                <TableCell className='isHover' sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">{row.value4}</TableCell>
                                <TableCell className='isHover' sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">
                                    {row.name === '' ?
                                        <KeyboardArrowUpIcon className='cursor-pointer hover:text-gray-200' fontSize='large' onClick={() => setState(!state)} />
                                        :
                                        row.value5
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody> :

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: "1px solid white", backgroundColor: "#262626" }}
                    >
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} component="th" scope="row"></TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right"></TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18, backgroundColor: "black" }} align="right"></TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right"></TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right"></TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right"></TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18, backgroundColor: "black" }} align="right">
                            <KeyboardArrowDownIcon className='cursor-pointer hover:text-gray-200' fontSize='large' onClick={() => setState(!state)} />
                        </TableCell>
                    </TableRow>
                }

                {rows2.map((row) => (
                    <TableRow
                        style={{ borderTop: "1px solid white" }}
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#262626" }}
                    >
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} component="th" scope="row">{row.name}</TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">
                            <Tooltip className='mx-2' title="..." placement="top">
                                <ErrorOutlineOutlinedIcon />
                            </Tooltip>
                            <Tooltip className='mx-2' title="..." placement="top">
                                <AssessmentIcon sx={{ color: "#68C2ED" }} />
                            </Tooltip>
                        </TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18, backgroundColor: "black" }} align="right">{row.value1}</TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">{row.value2}</TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">{row.value3}</TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18 }} align="right">{row.value4}</TableCell>
                        <TableCell sx={{ color: "#A5ACBC", fontSize: 18, backgroundColor: "black" }} align="right">{row.value5}</TableCell>
                    </TableRow>

                ))}

            </Table>
        </TableContainer>
    )
}