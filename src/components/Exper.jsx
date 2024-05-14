import React from 'react'

import html from "../asset/html.png"
import css from "../asset/css.png"
import javascript from "../asset/javascript.png"
import github from "../asset/github.png"
import node from "../asset/node.png"
import nextjs from "../asset/nextjs.png"
import tailwind from "../asset/tailwind.png"
import react from "../asset/react.png"
const Exper = () => {
    const tech =[
        {
            id:1,
            src:html,
            title:'HTML',
            style: 'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'CSS',
            style: 'shadow-blue-500'

        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style: 'shadow-yellow-400'

        },
        {
            id:4,
            src:react,
            title:'REACT',
            style: 'shadow-blue-500'

        },
        {
            id:5,
            src:tailwind,
            title:'TAILWIND',
            style: 'shadow-sky-500'

        },
        {
            id:6,
            src:nextjs,
            title:'NEXT JS',
            style: 'shadow-white'

        },
        {
            id:7,
            src:node,
            title:'NODE',
            style: 'shadow-green-400'

        },
        {
            id:8,
            src:github,
            title:'GITHUB',
            style: 'shadow-gray-400'

        },
    ]
  return (
    <div name ="experince" className="bg-gradient-to-b from-gray-800  to-black w-full h-screen ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl border-b-4 inline border-gray-500 p-2 font-bold">
                    Experience
                </p>
                <p className="py-6 ">
                These are tech I have worked with
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    tech.map(({id,src,style,title})=>(
                        <div key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">
                        {title}
                    </p>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Exper
