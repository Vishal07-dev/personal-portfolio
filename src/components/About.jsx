import React from 'react'

const About = () => {
  return (
    <div name="About" className=" w-full h-screen bg-gradient-to-b from-gray-800 to bg-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col h-full w-full justify-center">
            <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div >
                <p className="text-xl mt-20">
                I’m Vishal, a passionate front-end developer with a strong foundation in JavaScript, HTML, and CSS. Having mastered JavaScript, I'm currently honing my skills in React, where I’m building dynamic and responsive web applications. I’m also working with Tailwind CSS to create sleek, modern designs that are both functional and visually appealing. My journey in web development is driven by a love for clean code and a desire to create intuitive user experiences.
                     
                </p>
                <br/>
                {/* <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at magnam culpa dolor tempore illo numquam,
                     porro dolorem ipsa? Vero, quo eum optio saepe minus cupiditate dolor, possimus sint,
                     illo numquam quae voluptatibus alias blanditiis quod. Repellendus ad ab exercitationem.
                     
                </p> */}
        </div>
    </div>
  )
}

export default About
