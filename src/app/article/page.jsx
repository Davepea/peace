"use client"
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import Preloader from '@/components/Preloader';
import { AnimatePresence } from 'framer-motion';


import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const cardContainerRef = useRef();
    const [isLoading, setIsLoading] = useState(true);


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
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
    
              setTimeout( () => {
                setIsLoading(false);
                document.body.style.cursor = 'default'
                window.scrollTo(0,0);
              }, 2000)
          }
        )()
      }, [])
    

    return (
        <>
        <AnimatePresence mode='wait'>
            {isLoading && <Preloader />}
        </AnimatePresence>
           <section className='md:px-20 pb-[16rem]'>
             <div className='text-center pb-6'>
                <h1 className=' font-Archivo font-bold text-3xl  '>The Mystry Of Creative</h1>
                <small className=''>creators, artist</small>
             </div>
             <div>
                <div className='h-[400px] bg-black'></div>
             </div>
             <div className=' grid md:grid-cols-5 pt-6 '>
                <div className='md:col-span-1'>
                    <ul>
                        <li>soccers</li>
                        <li>soccers</li>
                        <li>soccers</li>
                        <li>soccers</li>
                    </ul>
                </div>
                <div className='md:col-span-4'>
                    <div >
                        <h2>Introduction</h2>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nobis nesciunt. Libero ea quas rem quisquam velit, sit ad. Unde pariatur voluptates ratione vero, tempora cum consectetur id, impedit, et quasi similique excepturi veniam? Optio laboriosam beatae neque consectetur modi? Aut earum minus molestiae eligendi laborum alias ea enim esse!
                        </p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nobis nesciunt. Libero ea quas rem quisquam velit, sit ad. Unde pariatur voluptates ratione vero, tempora cum consectetur id, impedit, et quasi similique excepturi veniam? Optio laboriosam beatae neque consectetur modi? Aut earum minus molestiae eligendi laborum alias ea enim esse!
                        </p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nobis nesciunt. Libero ea quas rem quisquam velit, sit ad. Unde pariatur voluptates ratione vero, tempora cum consectetur id, impedit, et quasi similique excepturi veniam? Optio laboriosam beatae neque consectetur modi? Aut earum minus molestiae eligendi laborum alias ea enim esse!
                        </p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nobis nesciunt. Libero ea quas rem quisquam velit, sit ad. Unde pariatur voluptates ratione vero, tempora cum consectetur id, impedit, et quasi similique excepturi veniam? Optio laboriosam beatae neque consectetur modi? Aut earum minus molestiae eligendi laborum alias ea enim esse!
                        </p>
                    </div>
                </div>
             </div>
           </section>
        </>
    );
};

export default Page;
