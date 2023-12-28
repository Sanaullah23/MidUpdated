import React from 'react';
import HeroImage from '../assets/images/phonehero.svg';
import TabletImage from '../assets/images/tablet.svg'
import desktoImage from '../assets/images/desktop.svg'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
        <section className='bg-[#2B2B2B] md:flex md:flex-row '>
            <div>
                   <img src={TabletImage} alt=""  className='hidden md:block md:h-[615px] md:w-[379px] lg:hidden'/>
                    <img src={HeroImage} alt=""  className='w-screen md:hidden'/>
                    <img src={desktoImage} alt=""  className='hidden lg:block lg:h-[691px] lg:w-[610px]'/>
               </div>

            
           
            <div className='pt-[30px] pb-[40px] px-8 md:pt-[80px] lg:py-[100px]   md:pl-[40px] md:flex md:flex-col'>
                <div>
                    <h1 className='text-white font-semibold text-[2.2rem]'>Create account</h1>
                    <p className='text-white font-normal py-[20px] md:py-[40px]'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                </div>
                <div className='flex flex-col gap-[15px] lg:flex lg:flex-col lg:justify-start lg:items-start'>
                    <div className='flex items-center gap-[12px] px-[20px] lg:px-[40px]   bg-white rounded-[20px]'>
                        <FaUser/>
                        <input type="text" placeholder='Username' className='h-[46px]' />
                    </div>
                    <div className='flex items-center gap-[12px] px-[20px] lg:px-[40px]  bg-white rounded-[20px]'>
                        <MdEmail/>
                        <input type="email" placeholder='Email Address'  className='h-[46px]'/>
                    </div>
                    <div className='flex items-center gap-[12px] px-[20px] lg:px-[40px] bg-white rounded-[20px]'>
                        <FaLock/>
                        <input type="password" placeholder='Passsword' className='h-[46px]' />
                    </div>
                    <div className='flex items-center gap-[12px] px-[20px] lg:px-[40px]  bg-white rounded-[20px]'>
                        <FaLock/>
                        <input type="password" placeholder='Confirm Password' className='h-[46px]'/>
                    </div>
                    <div className='flex justify-center items-center  px-[50px] lg:px-[90px] bg-fuchsia-600 text-white font-semibold rounded-[20px] mt-[30px] '>
                        <button className='h-[46px] '>Create account</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection