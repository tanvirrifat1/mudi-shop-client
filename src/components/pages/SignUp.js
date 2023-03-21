import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signUpLogo from '../assest/login-animation.gif'
import LoadingButton from '../Loding/LodingButton'
import SmallSpinner from '../Loding/SmallSpinner'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                <h1 className='text-center text-2xl font-bold'>Sign up</h1>
                <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
                    <img src={signUpLogo} className="w-full h-full" alt='' />

                    <label htmlFor="profileImage">
                        <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                            <p className="text-sm p-1 text-white">Upload</p>
                        </div>
                        <input type={"file"} id="profileImage" accept="image/*" className="hidden" />
                    </label>
                </div>

                <form className="w-full py-3 flex flex-col" >
                    <label htmlFor="firstName" >First Name</label>
                    <input
                        type={"text"}
                        id="firstName"
                        name="firstName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:border-purple-400"
                        placeholder='firstName'
                    />

                    <label htmlFor="lastName" >Last Name</label>
                    <input
                        type={"text"}
                        id="lastName"
                        name="lastName"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:border-purple-400"
                        placeholder='lastName'
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type={"email"}
                        id="email"
                        name="email"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:border-purple-400"
                        placeholder='email'
                    />

                    <label htmlFor="password">Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:border-purple-400" >
                        <input
                            placeholder='*****'
                            id="password"
                            name="password"
                            className=" w-full bg-slate-200 border-none outline-none "

                        />

                    </div>

                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:border-purple-400" >
                        <input
                            placeholder='*****'
                            id="confirmpassword"
                            name="confirmPassword"
                            className=" w-full bg-slate-200 border-none outline-none "

                        />

                    </div>

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
                    Already have account ?{" "}
                    <Link to={"/login"} className="text-primary underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
