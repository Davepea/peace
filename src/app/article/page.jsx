"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const cardContainerRef = useRef();

    useEffect(() => {
        const cards = gsap.utils.toArray(".box");

        cards.forEach((card, index) => {
            gsap.to(card, {
                y: `-${index * 100}%`, // Adjust the y position based on the index
                duration: 1,
                scrollTrigger: {
                    trigger: cardContainerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }, []);

    return (
        <>
            <section className='md:px-10 xs:px-4 max-w-[1500px] m-auto'>
                <div className='h-[400px] bg-gray-300'></div>
                <div className='grid md:grid-cols-5 font-clashDisplay gap-10 font-light py-14'>
                    <div className='md:col-span-3 '>
                        <p className='md:text-[1.2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum natus ullam tempora ut in debitis ratione, deserunt totam magni id voluptatum veritatis cum omnis, impedit modi repellendus iusto illum. Eos earum quisquam maxime architecto id sint est possimus velit laudantium cum! Aspernatur, dolorem rem veniam quasi quis fugit amet odit.
                        </p>
                    </div>
                    <div className=' md:col-span-2'>
                        <p className='md:text-[1.2rem] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum natus ullam tempora ut in debitis ratione, deserunt totam magni id voluptatum veritatis cum omnis, impedit modi repellendus iusto illum</p>
                    </div>
                </div>
            </section>
            <section className='relative overflow-hidden p-8' ref={cardContainerRef}>
                <div className='cardContainer h-screen flex flex-col '>
                    <div className="box bg-[#efc050] relative w-full h-[500px] rounded-lg"></div>
                    <div className="box bg-[#0505ef] relative w-full h-[500px] rounded-lg"></div>
                    <div className="box bg-[crimson] relative w-full h-[500px] rounded-lg"></div>
                    <div className="box bg-[white] relative w-full h-[500px] rounded-lg"></div>
                    <div className="box bg-[navy] relative w-full h-[500px] rounded-lg"></div>
                </div>
            </section>
            <section className='h-screen'></section>
        </>
    );
};

export default Page;
