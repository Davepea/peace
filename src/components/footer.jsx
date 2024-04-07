import React from 'react'
import Link from 'next/link'
import { FaXTwitter,FaInstagram, FaLinkedinIn  } from "react-icons/fa6";

const footer = () => {
  return (
    <>
    <footer className='md:px-10 xs:px-2  font-clashDisplay flex flex-col h-screen justify-between max-w-[1500px] m-auto'>
        <div></div>
        <div className="   flex flex-col md:items-start xs:items-center md:gap-6  py-24 md:text-start xs:text-center xs:gap-4">
           <div className=' font-Archivo'>
                <h1 className=' xl:text-9xl md:text-7xl xs:text-4xl font-semibold  '>
                    LET&apos;S HAVE 
                </h1>
                <h1 className=' xl:text-9xl md:text-7xl xs:text-4xl font-thin grid place-items-end'>
                    A CONVERSATION
                </h1>
            </div>
            <div className="container  font-clashDisplay  grid md:grid-cols-5 md:gap-0 xs:gap-4">
                <div className='md:col-span-2'>
                   
                    <p className=' max-w-[300px] '>
                        i am open to full time opportunities, collaboration and even bring your big imagination to life
                    </p>
                </div>
                <div className='md:col-span-3'>
                <div className=' flex md:justify-end flex-col gap-2 xs:justify-center '>
                    <button className='border border-[#eeeeee] md:px-10 xs:px-3 py-4 rounded-full xl:text-7xl md:text-4xl font-thin xs:text-3xl md:tracking-wide'>SEND ME AN EMAIL</button>
                    <div className='md:hidden xs:block'>
                        <div>DEV.PEACEDAVE@GMAIL.COM</div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        

        <div className='flex md:flex-row md:justify-between py-6 md:items-end xs:flex-col xs:items-center xs:gap-4'>
           

            <div>
                <small>or connect with me via</small>
                    <ul className=" text-2xl flex gap-4 md:justify-start xs:justify-between pt-2 ">
                        <Link href='#' className=''>
                            <FaInstagram />
                        </Link>
                        <Link href='#'>
                            <FaXTwitter />
                        </Link>
                        <Link href='#'>
                            <FaLinkedinIn />
                        </Link>

                    

                    </ul>
            </div>
            <div className='md:block xs:hidden '>
                <div className=''>DEV.PEACEDAVE@GMAIL.COM</div>
            </div>
            <div>
                <small>
                    &copy; PEACE DAVID 2024
                </small>
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default footer