import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import SideBar from '../component/SideBar'

type Props = {}

export default function index({ }: Props) {
    return (
        <div >
            {/* <Header /> */}
            <SideBar />
            <Outlet />
            <Footer />
        </div>
    )
}