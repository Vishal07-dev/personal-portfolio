import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const NavBar = () => {
    const [nav, setnav] = useState(false);
    const link = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experince'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
        <div className="flex justify-between items-center w-full h-20 text-white
     bg-black px-4 fixed">
            <div>
                <h1 className="text-5xl font-signature">Nony</h1>
            </div>
            <ul className="hidden md:flex">
                {link.map(({ id, link }) => (
                    <li
                        key={id}
                        className="capitalize px-4 text-gray-500 hover:scale-105 cursor-pointer hover:text-white duration-200">
                        <Link to={link} smooth duration={500} >{link}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setnav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden ">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (<ul className="flex flex-col justify-center items-center absolute top-0 
     left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
                {link.map(({ id, link }) => (
                    <li
                        key={id}
                        className="capitalize px-4 py-6 text-4xl text-gray-500 cursor-pointer hover:text-white duration-200">
                        <Link
                            onClick={() => setnav(!nav)}
                            to={link} smooth duration={500} >{link}</Link>
                    </li>
                ))}
            </ul>)
            }

        </div>
    );
};

export default NavBar
