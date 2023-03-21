import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assest/headerImg.jpg'
import { FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { VscThreeBars } from "react-icons/vsc";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(prev => !prev)
    }

    const menuItem = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        <li className='font-semibold'><Link to="menu">Menu</Link></li>
        <li className='font-semibold'><Link to="about">About</Link></li>
        <li className='font-semibold'><Link to="contact">Contact</Link></li>
    </>

    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <VscThreeBars className='h-7 w-7' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
            </div>
            <Link to="/" className="navbar-center">
                <img className='h-[80px] w-[85px]' src={logo} alt="" />
            </Link>
            <div className="navbar-end">
                <div className='relative'>
                    <HiShoppingCart className='h-7 w-7 my-2 mr-6' />
                    <div className='absolute top-0 right-4 rounded-lg -mt-1 text-white bg-red-700 h-5 w-3 text-base text-center'>0</div>
                </div>
                <div onClick={handleMenu} className='cursor-pointer'>
                    <FaUser className='h-7 w-7 my-2 mr-4 border-2 text-xl border-solid border-slate-600 p-1 rounded-full' />
                </div>

                {showMenu &&
                    <div className='right-2 flex justify-center bg-white py-2 px-2 shadow drop-shadow-md'>
                        <div>
                            <Link to="/product" className='whitespace-nowrap flex cursor-pointer font-semibold'>New product</Link>
                            <Link to='/login' className='whitespace-nowrap cursor-pointer font-semibold'>Login</Link>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}