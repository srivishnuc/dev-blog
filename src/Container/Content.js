import React from 'react'
import { Outlet } from 'react-router-dom';
import SideTab from './SideTab'


function Content() {
    return (
        <div className='grid grid-cols-4 h-auto'>
            <SideTab />
            <Outlet />
        </div >
    )
}

export default Content