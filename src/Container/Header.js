import React from 'react'
import SignInOut from '../Components/Header/SignInOut'



function Header() {
    return (
        <div className='grid grid-cols-4 h-1/6'>
            <h1 className='text-5xl font-bold mt-0 mb-6 col-span-3 text-emerald-400'>Short Blog</h1>
            <SignInOut />
        </div>
    )
}


export default Header