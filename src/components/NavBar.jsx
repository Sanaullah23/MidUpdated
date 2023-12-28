import React from 'react'
import logo from '../assets/images/logo.svg';
import { RiMenu2Fill } from "react-icons/ri";
const NavBar = () => {
  return (
    <>
        <section className='bg-[#2B2B2B] text-white font-bold'>
            <nav className='flex justify-between items-center px-[30px] py-[15px] md:w-screen md:px-[50px] md:py-[15px]'>
              <img src={logo} alt="sitelogo"  className='w-[182.56px] h-[24px]'/>
              <RiMenu2Fill className='w-[24px] h-[24px]'/>
            </nav>
        </section>
    </>
  )
}

export default NavBar