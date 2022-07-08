import React from 'react'
import { Link } from "react-router-dom";

function SignInOut() {
    return (
        <div className='flex items-center justify-end m-5 p-4 col-span-1'>
            <nav>
                <Link className="mr-2 text-primary" to='/signin'>SignIn</Link>
                <Link className="ml-2 text-primary" to='/signup'>SignUp</Link>
            </nav>
        </div>
    )
}


export default SignInOut