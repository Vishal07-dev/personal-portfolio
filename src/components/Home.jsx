import React from 'react'
import HeroImage from "../asset/heroImage.png";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center 
        h-full px-4 md:flex-row gap-14">
                <div className='mt-28 md"mt-0'>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">I am <span className='text-red-500'>Vishal Rohera</span> , a Web Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfoliospan
                            <span className="group-hover:rotate-90 duration-300"><MdArrowRight size={25} /></span>
                        </Link>
                    </div>
                </div>
                <div className='md:px-2 rounded-lg  bg-gray-600 mt-10 md:m-0'>
                    <img src={HeroImage} alt="my pitcure" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home
