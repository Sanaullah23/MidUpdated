import React from 'react';
import logo from '../assets/images/logo.svg';
import { RxDiscordLogo } from "react-icons/rx";
import { FiYoutube } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
       <section className='bg-[#3B3B3B] text-[#CCCCCC] pt-[30px] pb-[40px] px-8'>
        <footer className='pb-[30px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-[40px] lg:pr-[195px]'>
            <div className='flex flex-col justify-start items-start gap-[20px]'>
                <img src={logo} alt="" className='h-[32px]'/>
                <p className='font-normal text-[16px]'>NFT marketplace UI created with Anima for Figma.</p>
                
                <div>
                    <p className='font-normal text-[16px]'>Join our community</p>
                    <div className='flex gap-[10px] pt-[15px]'>
                        <RxDiscordLogo className='w-[32px] h-[32px]'/>
                        <FiYoutube className='w-[32px] h-[32px]'/>
                        <LuTwitter className='w-[32px] h-[32px]'/>
                        <IoLogoInstagram className='w-[32px] h-[32px]'/>
                    </div>
                </div>
                
            </div>
            <div className='py-[30px] flex flex-col gap-[20px]'>
                <h1 className='text-[22px] font-bold text-white'>Explore</h1>
                <ul className='flex flex-col gap-[20px]'>
                    <li>Marketplace</li>
                    <li>Rankings</li>
                    <li>Connect a wallet</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='text-[22px] text-white font-bold font-mono'>Join our weekly digest</h1>
                <p>Get exclusive promotions & updates straight to your inbox.</p>
                <div className='flex flex-col gap-[16px] md:pb-[49px] lg:pb-[0px] md:items-start md:relative'>
                    <div className=' px-[20px]  bg-white rounded-[20px]'>
                        <input type="email" placeholder='Enter Your Email Address'  className='h-[46px] md:h-[60px] md:py-[16px] md:px-[20px]'/>
                    </div>
                   <div className='flex justify-center items-center  gap-[10px] px-[50px] bg-fuchsia-600 text-white font-semibold rounded-[20px] md:absolute md:left-[220px]'>
                        <MdEmail className='md:hidden'/>   
                        <button className='h-[46px] md:h-[60px]'>Subscribe</button>
                    </div>
                </div>
            
                   
                
               
            </div>
       
        </footer>
        <hr />
            <p className='text-[12px] pt-[30px] lg:pt-[30px]'>Ⓒ NFT Market. Use this template freely.</p>
       
       </section>
    </>
  )
}

export default Footer