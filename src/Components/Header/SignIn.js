import React from 'react'

function SignIn() {
    return (
        <div className="w-full max-w-xs m-10 p-4">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-error text-xs italic">Please enter the password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-primary text-secondary hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline text-sm text-primary" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="flex flex-col items-center justify-between gap-4">
                    <i>or</i>
                    <button className="bg-secondary text-primary hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login as Guest
                    </button>
                </div>
            </form>
        </div>
    )
}


export default SignIn