import React from 'react'
import signUpLogo from '../assest/login-animation.gif'

export default function SignUp() {
    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                <h1 className='text-center text-2xl font-semibold'>Sign Up</h1>
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-lg'>
                    <img src={signUpLogo} alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}
