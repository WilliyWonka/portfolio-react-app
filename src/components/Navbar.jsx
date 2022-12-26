import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaInstagram, FaNeos} from 'react-icons/fa'

import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

import Resume from '../assets/pdf/RESUME.pdf'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    //width100%, high80px, flex, justify-between, items-center, padding, background 
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            
            {/* Added image logo by require. Image import doesn't work. */}
            <Link to='home' smooth={true} duration={500} >
                <img src={require('../assets/LogoA.png')} 
                alt="Logo Image" 
                style={{width: '100px'}} />
            </Link>
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>

                {/* npm react scroll docs: https://www.npmjs.com/package/react-scroll */}
                <li>
                    <Link to='home' smooth={true} duration={500} >
                    Home
                    </Link>
                </li>

                <li>
                    <Link to="about" smooth={true} duration={500} >
                    About
                    </Link>
                </li>

                <li>
                    <Link to="skills" smooth={true} duration={500} >
                    Skills
                    </Link>
                </li>

                <li>
                    <Link to="work" smooth={true} duration={500} >
                    Work
                    </Link>
                </li>

                <li>
                    <Link to="contact" smooth={true} duration={500} >
                    Contact
                    </Link>
                </li>
            </ul>
    
       {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul 
        className={
            !nav 
                ? 'hidden' 
                : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            
            <li className='py-6 text-4xl'>
            {' '}
                <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            
            <li className='py-6 text-4xl'>
            {' '}
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            
            <li className='py-6 text-4xl'>
            {' '}
                <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            
            <li onClick={handleClick} className='py-6 text-4xl'>
            {' '}
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cd486b]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="https://www.instagram.com/williywonka/"
                     target='_blank'>
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="https://github.com/WilliyWonka"
                     target='_blank'>
                        Github <FaGithub size={30} />
                    </a>
                </li>


                
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF9900]'>
                     <Link to="contact" smooth={true} duration={500} 
                     className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30} />
                    </Link>
                    
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#707f8b]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="https://willliam.notion.site/e9468ab32cd8466ba35c3df1fd9a1f90"
                     target='_blank'>
                        Notion <FaNeos size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0096D6]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href={Resume}
                    target='_blank'
                    >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
