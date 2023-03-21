import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../assest/login-animation.gif'
import LoadingButton from '../Loding/LodingButton'
import SmallSpinner from '../Loding/SmallSpinner'


export default function Login() {
    const [loading, setLoading] = useState(false)
    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                <h1 className='text-center text-2xl font-bold'>Login</h1>
                <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
                    <img src={loginImage} className="w-full" alt='' />
                </div>

                <form className="w-full py-3 flex flex-col" >
                    <label htmlFor="email">Email</label>
                    <input
                        type={"email"}
                        id="email"
                        name="email"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded "
                        placeholder='email'

                    />
                    <label htmlFor="email">Password</label>
                    <input
                        type={"password"}
                        id="password"
                        name="password"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded "
                        placeholder='*****'

                    />

                    <div className='mt-4'>
                        <LoadingButton
                            type="submit"
                            className='btn btn-accent mt-3 w-full'
                            value='Login'
                        >
                            {loading ? <SmallSpinner /> : 'signUp'}
                        </LoadingButton>
                    </div>
                </form>
                <p className="text-left text-sm mt-2">
                    Don't  have account ?{" "}
                    <Link to={"/signup"} className="text-secondary underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}
