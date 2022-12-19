import React from 'react'

import HTML from '../assets/html.png'

const Skills = () => {
  return (
    <div name='skills' 
    className='w-full h-screen bg-[#0a192f] text-gray-300'>
        
        {/* Container */}
        <div className=
        'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className=
                'text-4xl font-bold inline border-b-4 border-pink-600'>
                    Skills</p>
                <p 
                className='py-4'>
                😎These are the technologies I've learned with</p>
            </div>

            <div
            className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/html.png')} 
                    alt="HTML icon" />
                    <p 
                    className='my-4'>
                    HTML</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/css.png')} 
                    alt="CSS icon" />
                    <p 
                    className='my-4'>
                    CSS</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/javascript.png')} 
                    alt="JavaScript icon" />
                    <p 
                    className='my-4'>
                    JavaScript</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/react.png')} 
                    alt="REACT icon" />
                    <p 
                    className='my-4'>
                    REACT</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/github.png')} 
                    alt="GITHUB icon" />
                    <p 
                    className='my-4'>
                    GITHUB</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/node.png')} 
                    alt="NODEJS icon" />
                    <p 
                    className='my-4'>
                    Node.js</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/mongo.png')} 
                    alt="MONGODB icon" />
                    <p 
                    className='my-4'>
                    Mongo DB</p>
                </div>

                <div 
                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'
                    src={require('../assets/aws.png')} 
                    alt="AWS icon" />
                    <p 
                    className='my-4'>
                    AWS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
