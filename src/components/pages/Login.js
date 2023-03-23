import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import loginImage from '../assest/login-animation.gif'
import LoadingButton from '../Loding/LodingButton'
import SmallSpinner from '../Loding/SmallSpinner'


export default function Login() {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: ""
    });
    console.log(data);
    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value,
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const { email, password } = data
        if (email && password) {
            toast.success('successful', { autoClose: 500 })
            setLoading(false)
        }
        else {
            toast.error('password wrong', { autoClose: 1000 })
        }
    }



    return (
        <div className="p-3 md:p-4" >
            <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                <h1 className='text-center text-2xl font-bold'>Login</h1>
                <form
                    onSubmit={handleSubmit}
                    className="w-full py-3 flex flex-col" >
                    <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
                        <img src={loginImage} className="w-full h-full" alt='' />

                        {/* <label htmlFor="profileImage">
                            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                                <p className="text-sm p-1 text-white">Upload</p>
                            </div>
                            <input type={"file"} id="profileImage" accept="image/*" className="hidden" />
                        </label> */}
                    </div>

                    <label htmlFor="email">Email</label>
                    <input
                        type={"email"}
                        id="email"
                        name="email"
                        className="input input-bordered"
                        placeholder='email'
                        value={data.email}
                        onChange={handleOnChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <div className="flex px-2 py-1 mt-1 mb-2 input input-bordered">
                        <input
                            type={showPassword ? "text" : 'password'}
                            placeholder='*****'
                            id="password"
                            name="password"
                            className="w-full border-none outline-none"
                            value={data.password}
                            onChange={handleOnChange}
                        />
                        <span onClick={handleShowPassword} className="flex text-xl justify-center items-center cursor-pointer">
                            {showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>


                    <div className='mt-4'>
                        <LoadingButton
                            type="submit"
                            className='btn btn-accent mt-3 w-full'
                            value='Login'
                        >
                            {loading ? <SmallSpinner /> : 'login'}
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

// style={{ backgroundImage: `url("${another}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}