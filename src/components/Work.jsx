import React from 'react'

import DB from '../assets/pdf/database.pdf'
import Dating from '../assets/pdf/datingapp.pdf'
import Mini from '../assets/pdf/miniapp.pdf'
import Spring from '../assets/pdf/spring.pdf'
import Mern from '../assets/pdf/mern.pdf'

import Cdb from '../assets/cover/database.jpg'
import Cdating from '../assets/cover/android.jpg'
import Cmini from '../assets/cover/android.jpg'
import Cspring from '../assets/cover/spring.png'
import Cmern from '../assets/cover/mern.jpg'
import Progress from '../assets/cover/progress.jpg'

const Work = () => {
  return (
    <div name='work'
    className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div 
        className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div 
            className='pb-8'>
                <p 
                className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'> #Portfolio</p>
                <p 
                className='py-6'> Check out some of my recent work</p>
            </div>

        {/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Item */}
                <div
                style= {{ backgroundImage : `url(${Cdb})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h1 className='text-center'> Database Design (사람인) </h1>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={DB} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                style= {{ backgroundImage : `url(${Cdating})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           <h1 className='text-center'>"Tinder" Dating App (Clone Coding)</h1>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={Dating} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>



                <div
                style= {{ backgroundImage : `url(${Cmini})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h1 className='text-center'>image.pngMini Game App</h1>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={Mini} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div
                style= {{ backgroundImage : `url(${Cspring})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h1 className='text-center'>Springboot Dashboard</h1>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={Spring} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>


                <div
                style= {{ backgroundImage : `url(${Cmern})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h1 className='text-center'>Mern Stack ( JWT + Redux )</h1>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href={Mern} target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                            <a href="https://github.com/WilliyWonka/restfulapi"
                            target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div
                style= {{ backgroundImage : `url(${Progress})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h1 className='text-center'>Portfolio on going</h1>
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> */}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work
