"use client"

import React from 'react'
import Link from 'next/link'
import { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";



import { gsap } from "gsap";

import { FaXTwitter,FaInstagram, FaLinkedinIn,FaMedium  } from "react-icons/fa6";

const Footer = () => {
    const mymar2 = useRef()
    useGSAP(()=>{
        var tl = gsap.timeline();
      
        tl.to(".marque_parts",{
          repeat: -1,
          xPercent: -100,
          duration: 15,
          ease:"linear",
        })
        .totalProgress(0.5);
        gsap.set(".marquee_inner", {xPercent: -50});
    
      
      },{scope: mymar2})
  return (
    <>
    <footer className=' xs:px-2  font-clashDisplay flex flex-col h-screen justify-between max-w-[1500px] m-auto '>
        {/* <div></div> */}
        <div className="   flex flex-col md:items-start xs:items-center md:gap-6   md:text-start xs:text-center xs:gap-4">
            <div className=' w-full overflow-hidden' ref={mymar2}>
            <div className="marquee border-t border-[#12121227]">
              <div className="marquee_inner">
                <div className="marque_parts">
                  <h1 className='xl:text-[10rem] md:text-7xl xs:text-4xl '>
                    LET&apos;S   HAVE   A   CONVERSATION
                </h1>
                <div className='px-24'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-36 md:h-28">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                </div>

                </div>
                <div className="marque_parts">
                  <h1 className='xl:text-[10rem] md:text-7xl xs:text-4xl '>
                    LET&apos;S  HAVE  A  CONVERSATION
                  </h1>
                  <div className='px-24'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-36 md:h-28">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                </div>
                </div>
                <div className="marque_parts">
                  <h1 className=' xl:text-[10rem] md:text-7xl xs:text-4xl '>
                    LET&apos;S  HAVE  A  CONVERSATION
                  </h1>
                  <div className='px-24' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-36 md:h-28">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                </div>
                </div>
                
                
              </div>
            </div>
            </div>
      
      
            <div className="container  font-clashDisplay md:px-20 pt-4 ">
                <div className=''>
                   
                    <p className=' md:text-[1.5rem] font-thin'>
                    I&apos;m eagerly welcoming full-time opportunities, collaborative ventures, and the chance to turn your boldest ideas into reality. Just one click away from sparking a connection with me!
                    </p>
                </div>
                <div className=''>
                    <div className='pt-14'>
                      <Link href='https://dev.peacedave@gmail.com'>
                      <button className='border border-[#EEE] px-10 py-4 rounded-full font-clashDisplay text-[1.5rem] tracking-wide md:w-[350px] mb-7'>Send me an EMAIL</button>
                      </Link>
                        <Link href='dev.peacedave@gmail.com'>
                        <div className='md:hidden xs:block'>
                            <div>DEV.PEACEDAVE@GMAIL.COM
                                
                            </div>
                        </div>
                        </Link>
                    </div>
                
                </div>
            </div>
        </div>
        

        <div className='grid md:grid-cols-5 md:px-2'>
            <div className=' md:col-span-2'>
                <small>contact</small>

            </div>
            <div className=' md:col-span-3 font-satoshi'>
                <li className="grid grid-cols-2 md:text-sm xs:text-xs border-b border-[#eeeeee0c] py-2 gap-3">
                    <span>+234 (0) 810 299 6646</span>
                    {/* https://medium.com/@dev.peacedave */}
                    {/* https://www.linkedin.com/in/web-developer-0b1121235/ */}
                    {/* https://www.tiktok.com/@__peacedavid?_t=8llySkunmw2&_r=1 */}
                    {/*  */}
                    {/* */}
                    <Link href="https://www.instagram.com/__peacedavid">
                      <div className='flex items-center gap-2'>
                        <div className=''><FaInstagram /></div>
                      <span>Follow me on Instagram</span>
                      

                      </div>
                    </Link>
                </li>
                <li className="grid grid-cols-2 md:text-sm xs:text-xs border-b border-[#eeeeee0c] py-2  gap-3">
                    <span>dev.peacedave@gmail.com</span>
                    <Link href='https://medium.com/@dev.peacedave'>
                    <div className='flex items-center gap-2'>
                    <div className=''><FaMedium /></div>

                    <span>Read on Medium</span>

                    </div>
                    </Link>
                </li>
                <li className="grid grid-cols-2 md:text-sm xs:text-xs border-b border-[#eeeeee0c] py-2 gap-3">
                  <Link href='https://www.linkedin.com/in/web-developer-0b1121235/'>
                  <span>Check me up on linkedin</span>

                  </Link>
                    <Link href='https://twitter.com/peaceboy0001 '>
                    <div className='flex items-center gap-2'>
                    <div className=''><FaXTwitter /></div>

                    <span>Follow me on X</span>

                    </div>
                    </Link>
                </li>
            </div>
           

            
        </div>
        <div className='md:px-2'>
            <small>&copy;PEACE ADEBAYO 2024</small>
        </div>
    </footer>
    
    </>
  )
}

export default Footer