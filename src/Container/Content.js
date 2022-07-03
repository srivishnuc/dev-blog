import React from 'react'
import { Outlet } from 'react-router-dom';



function Content() {
    return (
        <div className='grid grid-cols-4 h-4/6'>
            <Outlet />
        </div>
    )
}

export default Content