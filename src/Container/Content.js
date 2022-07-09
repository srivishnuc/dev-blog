import React from 'react'
import { Outlet } from 'react-router-dom';


function Content() {
    return (
        <div className='grid grid-cols-12 h-auto'>
            <Outlet />
        </div >
    )
}

export default Content