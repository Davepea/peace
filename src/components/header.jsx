import React from 'react'
import Link from 'next/link'
import { FaXTwitter,FaInstagram, FaLinkedinIn  } from "react-icons/fa6";

const header = () => {
  return (
    <div>
        <nav className=" justify-between p-6 md:px-10 items-center flex max-w-[1500px] m-auto   ">
        <h1 className=" font-clashDisplay">PEACEDAVID.</h1>
        <ul className=" text-sm border-1 bg-[#eeeeee13]  py-3 px-10 rounded-[30px] flex gap-8 backdrop-blur-md md:flex xs:hidden font-clashDisplay">
            <Link href='#'>Home</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Work</Link>
        </ul>
        <div>
            <p className=' font-clashDisplay'>connect with me</p>
        </div>
        
        </nav>
        {/* <div className=" fixed  right-0 top-[43%]">
            <ul className=" bg-[#665191] text-white p-4 py-6 flex flex-col gap-6 ">
            <Link href='#'>
                <FaInstagram />

            </Link>
            <Link href='#'>
                <FaXTwitter />

            </Link>
            <Link href='#'>
                <FaLinkedinIn />

            </Link>

            

            </ul>
        </div> */}
    {/* <div className=' fixed top-0 right-0 left-0 bottom-0 backdrop-blur-lg grid place-items-center'>
        <p className='text-center p-8'>
            Site under contruction🤗___ check out my X page to know more about me <br/> 
            <Link href="/" className=' text-blue-600'>twitter</Link>
        </p>
    </div> */}
    </div>
  )
}

export default header
