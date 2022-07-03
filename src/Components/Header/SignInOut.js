import React from 'react'
import { Link } from "react-router-dom";

function SignInOut() {
    return (
        <div className='col-span-1'>
            <nav class="flex">
                <Link class="flex-1" to='/singin'>SignIn</Link>
                <Link class="flex-1" to='/singup'>SignUp</Link>
            </nav>
        </div>
    )
}


export default SignInOut