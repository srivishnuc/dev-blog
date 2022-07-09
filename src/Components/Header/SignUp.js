import React from 'react'
import { useNavigate } from "react-router-dom";


function SignUp() {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate("/blog", { replace: true });
    }

    return (
        <div className="col-start-10 col-span-6 max-w-xs m-10 p-4">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-primary text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-error text-xs italic">Please enter the password.</p>
                </div>
                <div className="mb-6">
                    <label className="block text-primary text-sm font-bold mb-2" htmlFor="confirmpassword">
                        Confirm Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="******************" />
                    <p className="text-error text-xs italic">Please re-enter the password.</p>
                </div>
                <div className="mb-6">
                    <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="xyz@test.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-primary text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="9876543210" />

                </div>
                <div className="flex items-center justify-end">
                    <button className="bg-primary text-secondary hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}


export default SignUp