import React from 'react'
import SignInOut from '../Components/Header/SignInOut'



function Header() {
    return (
        <div className='grid grid-cols-5 h-1/6 bg-secondary'>
            <h1 className='text-5xl font-bold mt-0 mb-6 col-span-4 text-primary'>Short Blog</h1>
            <SignInOut />
        </div>
    )
}


export default Header