"use client"

import React from 'react'
import Link from 'next/link'
import { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";

import { FaXTwitter,FaInstagram, FaLinkedinIn  } from "react-icons/fa6";

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
                  <h1 className='xl:text-9xl md:text-7xl xs:text-4xl font-normal'>
                    LET&apos;S   HAVE   A   CONVERSATION
                </h1>
                  →
                </div>
                <div className="marque_parts">
                  <h1 className=' xl:text-9xl md:text-7xl xs:text-4xl font-normal'>
                    LET&apos;S HAVE A CONVERSATION
                  </h1>
                    →
                </div>
                <div className="marque_parts">
                  <h1 className=' xl:text-9xl md:text-7xl xs:text-4xl font-normal'>
                    LET&apos;S HAVE A CONVERSATION
                  </h1>
                    →
                </div>
                
                
              </div>
            </div>
            </div>
      
      
            <div className="container  font-clashDisplay md:px-20 pt-10 ">
                <div className=''>
                   
                    <p className=' md:text-[1rem] '>
                        i am open to full time opportunities, collaboration and even bring your big imagination to life
                        i am open to full time opportunities, collaboration and even bring your big imagination to life
                        i am open to full time opportunities, collaboration and even bring your big imagination to life
                        i am open to full time opportunities, collaboration and even bring your big imagination to life
                    </p>
                </div>
                <div className=''>
                    <div className='pt-6'>
                        <button className='border border-[#0e0d0d] px-6 py-2 rounded-full font-clashDisplay text-[1.5rem] tracking-wide'>SEND ME AN EMAIL</button>
                        <div className='md:hidden xs:block'>
                            <div>DEV.PEACEDAVE@GMAIL.COM
                                
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        

        <div className='grid md:grid-cols-5 md:px-2'>
            <div className=' md:col-span-2'>
                <small>contact</small>

            </div>
            <div className=' md:col-span-3'>
                <li className="grid grid-cols-2 md:text-sm xs:text-xs border-b border-[#1212123d] py-2">
                    <span>+234 810 299 6646</span>
                    <span>@ dev.peacedave@gmail.com</span>
                </li>
                <li className="grid grid-cols-2 md:text-sm xs:text-xs border-b border-[#1212123d] py-2">
                    <span>+234 810 299 6646</span>
                    <span>@ dev.peacedave@gmail.com</span>
                </li>
                <li className="grid grid-cols-2 md:text-sm xs:text-xs border-b border-[#1212123d] py-2">
                    <span>+234 810 299 6646</span>
                    <span>@ dev.peacedave@gmail.com</span>
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