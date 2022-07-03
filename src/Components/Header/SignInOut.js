import React from 'react'
import { Link } from "react-router-dom";

function SignInOut() {
    return (
        <div className='col-span-1'>
            <nav className="flex">
                <Link className="flex-1" to='/signin'>SignIn</Link>
                <Link className="flex-1" to='/signup'>SignUp</Link>
            </nav>
        </div>
    )
}


export default SignInOut