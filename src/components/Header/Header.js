import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assest/headerImg.jpg'
import { FaCartPlus, FaUser } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

export default function Header() {
    return (
        <div>
            <div className="navbar shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <VscThreeBars className='h-8 w-8' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            <li className='font-semibold'><Link to="/">Home</Link></li>
                            <li className='font-semibold'><Link to="menu">Menu</Link></li>
                            <li className='font-semibold'><Link to="about">About</Link></li>
                            <li className='font-semibold'><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <Link to="/" className="navbar-center">
                    <img className='h-[80px] w-[85px]' src={logo} alt="" />
                </Link>
                <div className="navbar-end">
                    <div>
                        <FaUser className='h-6 w-6 my-2 mr-4' />
                    </div>
                    <div className='relative'>
                        <FaCartPlus className='h-6 w-6 my-2 mr-6' />
                        <div className='absolute top-0 right-4 rounded-lg -mt-1 text-white bg-red-700 h-5 w-3 text-base text-center'>0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
