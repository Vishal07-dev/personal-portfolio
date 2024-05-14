import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SocialLinks = () => {
    const link = [
        {
            id:1,
            child: (
                <>
                Linkedin<FaLinkedin size={30}/>
                </>
            ),
            href :'https://www.linkedin.com/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github<FaGithub size={30}/>
                </>
            ),
            href:'https://github.com',        
        },
        {
            id:3,
            child:
            (
                <>
                    Mail<HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:roheravishal567@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/final resume vishal (2).pdf',
            style:"rounded-br-md",
            download:true,
        }
    ]
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>


        {link.map(({id,child,href,style,download})=>
        (
            // eslint-disable-next-line
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
            <a 
            href={href}
            className="flex justify-between item-center w-full text-white"
            target='_blank'
            download={download}
            rel="noreferrer"
            >
                {child}
            </a>
        </li>


        ))}
        
      </ul>
    </div>
  );
};

export default SocialLinks
