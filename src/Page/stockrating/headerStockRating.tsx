import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, Switch, FormGroup, FormControlLabel, FormControl, MenuItem, Select } from "@mui/material"
import { CaretDownOutlined } from '@ant-design/icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Dropdown, MenuProps, Space } from 'antd';


export default function HeaderCpn() {
    const items: MenuProps['items'] = [
        {
            label: <a href="https://www.antgroup.com">Tiếng Việt</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">English</a>,
            key: '1',
        }
    ];

    const Header = styled(Box)({
        backgroundColor: "#0A1D42",
        height: "90px",
        width: "100%",
        display: "flex",
        justifyContent: 'space-between',

    })

    const HeaderLeft = styled(Typography)({
        display: "flex",
    })

    const HeaderRight = styled(Typography)({
        display: "flex",
    })

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 87,
        height: 64,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 10,
            padding: 0,
            transform: 'translateX(0px)',
            color: '#E76224',
            '&.Mui-checked': {
                transform: 'translateX(27px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#E76224' : '#0A1D42',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#E76224' : '#E76224',
            width: 40,
            height: 44,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            border: "1px solid #A5ACBC",
            backgroundColor: theme.palette.mode === 'dark' ? '#0A1D42' : '#0A1D42',
            borderRadius: 50 / 2,
        },
    }));

    return (
        <div className='w-full pl-14'>
            <Header position="static" >
                <HeaderLeft sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ color: "#E76224", fontSize: "26px", fontWeight: "800", fontFamily: "Roboto", padding: "0 24px" }}>STOCK RATING</Typography>
                    <Typography sx={{ color: "#576072", fontSize: "26px", fontWeight: "800", fontFamily: "Roboto" }}>SECTOR RATING</Typography>
                </HeaderLeft>

                <HeaderRight>
                    <FormGroup >
                        <FormControlLabel
                            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                            label=""
                        />
                    </FormGroup>

                    <div style={{ height: "44px", width: "180px", margin: "17px 12px 38px 0", display: "flex", justifyContent: "space-between" }}>
                        <Dropdown className=' cursor-pointer w-full h-full border border-gray-300 flex items-center' menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='text-white flex justify-around w-full h-full hover:text-[rgba(0,0,0,0.8)] hover:bg-white duration-300'>
                                    <span><LanguageOutlinedIcon /> Tiếng Việt</span>
                                    <CaretDownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                    <div style={{ height: "44px", width: "180px", margin: "17px 28px 38px 0", display: "flex", justifyContent: "space-between", position: "relative" }}>
                        <Dropdown className=' cursor-pointer w-full h-full border border-gray-300 flex items-center' menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='text-white flex justify-around w-full h-full hover:text-[rgba(0,0,0,0.8)] hover:bg-white duration-300'>
                                    <span><AccountCircleIcon /> Hi, ...</span>
                                    <CaretDownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <div style={{ position: "absolute", color: "white", top: "45px", display: "flex" }}>
                            <Typography sx={{ fontSize: "15px", fontWeight: "400", fontFamily: "Roboto" }}>Thời gian còn lại:</Typography>
                            <span style={{ color: "#E76224", fontSize: "15px", fontWeight: "700", fontFamily: "Roboto", margin: "0 4px" }}>313</span>
                            <span style={{ fontSize: "15px" }}>ngày</span>
                        </div>
                    </div>
                </HeaderRight>
            </Header >
        </div>
    );
}