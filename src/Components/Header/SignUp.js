import React from 'react'
import { useNavigate } from "react-router-dom";


function SignUp() {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate("/blog", { replace: true });
    }

    return (
        <div className=''>
            <h1 className='text-3xl font-bold underline'>SignUp</h1>
            <button onClick={handleClick}>SingUp</button>
        </div>
    )
}


export default SignUp