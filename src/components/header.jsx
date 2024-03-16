import React from 'react'
import Link from 'next/link'
import { FaXTwitter,FaInstagram, FaLinkedinIn  } from "react-icons/fa6";

const header = () => {
  return (
    <div>
        <nav className=" justify-between p-6 px-20 items-center md:flex  xs:hidden">
        <h1 className=" font-satoshi">PeaceDavid.</h1>
        <ul className=" border py-4 px-10 rounded-[30px] flex gap-8 bg-[#ffffff18] backdrop-blur-md">
            <Link href='#'>Home</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Work</Link>
        </ul>
        <div>
            <p>connect with me</p>
        </div>
        
        </nav>
        <div className=" fixed  right-0 top-[40%]">
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
        </div>

    </div>
  )
}

export default header
