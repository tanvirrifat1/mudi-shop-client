import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpLogo from '../assest/login-animation.gif'
import LoadingButton from '../Loding/LodingButton'
import SmallSpinner from '../Loding/SmallSpinner'
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from 'react-toastify'
import ImageToBase64 from '../utility/ImageToBase64'


export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate()
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
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((preve) => !preve);
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
        const { firstName, email, password, confirmPassword } = data
        if (firstName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                toast.success('successful', { autoClose: 500 })
                navigate('/login')
                setLoading(false)
            } else {
                toast.error('Password are not equal', { autoClose: 500 })
            }
        }
        else {
            toast.warning('please enter required field', { autoClose: 1000 })
        }
    }

    const handleImageUpload = async (e) => {
        const data = await ImageToBase64(e.target.files[0])
        console.log(data);

        setData((prev) => {
            return {
                ...prev,
                image: data
            }
        })
    }

    return (
        <div className="p-3 md:p-4" >
            <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                <h1 className='text-center text-2xl font-bold'>Sign up</h1>
                <form
                    onSubmit={handleSubmit}
                    className="w-full py-3 flex flex-col" >
                    <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">

                        <img src={data.image ? data.image : signUpLogo} className="w-full h-full" alt='' />

                        <label htmlFor="profileImage">
                            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                                <p className="text-sm p-1 text-white">Upload</p>
                            </div>
                            <input onChange={handleImageUpload} type={"file"} id="profileImage" accept="image/*" className="hidden" />

                        </label>
                    </div>

                    <label htmlFor="firstName" >First Name</label>
                    <input
                        type={"text"}
                        id="firstName"
                        name="firstName"
                        className="input input-bordered"
                        placeholder='firstName'
                        value={data.firstName}
                        onChange={handleOnChange}
                        required
                    />

                    <label htmlFor="lastName" >Last Name</label>
                    <input
                        type={"text"}
                        id="lastName"
                        name="lastName"
                        className="input input-bordered"
                        placeholder='lastName'
                        value={data.lastName}
                        onChange={handleOnChange}
                        required
                    />

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
                            required
                        />
                        <span onClick={handleShowPassword} className="flex text-xl justify-center items-center cursor-pointer">
                            {showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <label htmlFor="confirmedPassword">Confirm Password</label>
                    <div className="flex px-2 py-1 mt-1 mb-2 input input-bordered">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmedPassword"
                            name="confirmPassword"
                            placeholder='*****'
                            className="w-full border-none outline-none "
                            value={data.confirmPassword}
                            onChange={handleOnChange}
                            required
                        />
                        <span
                            className="flex text-xl cursor-pointer"
                            onClick={handleShowConfirmPassword}
                        >
                            {showConfirmPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <div className='mt-4'>
                        <LoadingButton
                            type="submit"
                            className='btn btn-accent mt-3 w-full'
                            value='signup'
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
