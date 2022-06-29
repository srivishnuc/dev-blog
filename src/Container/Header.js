import React from 'react'
import SignInOut from '../Components/Header/SignInOut'



function Header() {
    return (
        <div className='grid grid-cols-4 h-1/5'>
            <h1 className='text-3xl col-span-3 font-bold underline'>Short Blog</h1>
            <SignInOut />
        </div>
    )
}


export default Header