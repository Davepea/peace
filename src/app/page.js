"use client"
import Image from "next/image";
import { AnimatePresence } from 'framer-motion';
import { gsap } from "gsap";
import { TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import { projects } from '@/data';
import Card from '@/components/Card/index.jsx';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import Preloader from '@/components/Preloader'
import Rounded from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic';



gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,EaselPlugin,TextPlugin);


const words = ["DEVELOPER","DESIGNER", "WRITER"]





export default function Home() {
  const [index, setIndex] = useState(0);
   const myText = useRef()
   const mymar = useRef()

   const container = useRef(null);
   const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Adjusted interval duration

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    TweenLite.to('.word', 0.5, { ease: "bounce.out", opacity: 0, onComplete: () => {
      TweenLite.to('.word', 0.5, { opacity: 1 });
    }});
  }, [index]);

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
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

  useGSAP(() => {
    var tl = gsap.timeline();
    
    // This part is correct, setting up the animation
    tl.to("body", {
      background: "#EEE",
      duration: 1,
      ease: "linear",
    });
    tl.set("body",{ background: "#141516"})
  
    // ScrollTrigger configuration
    ScrollTrigger.create({
      trigger: ".thesection",
      // markers: true,
      start: 'top bottom',
     
    });
  });

 
  useGSAP(()=>{
    var tl = gsap.timeline();

    
  
    tl.to(".marque_parts",{
      repeat: -1,
      xPercent: -100,
      duration: 2,
      ease:"linear",
    })
    .totalProgress(0.5);
    gsap.set(".marquee_inner", {xPercent: -50});
    
  
  },{scope: mymar})
  


  return ( 
    <>
      <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
      
        <section className="grid md:grid-cols-12  md:px-20 xs:px-4 pt-[12rem] pb-[16rem]  max-w-[1500px] m-auto ">
            
            <div className="md:col-span-10 flex  items-end  ">
              <div className="md:text-start  flex flex-col md:gap-10 xs:gap-6 ">
               
                <div className=" font-thin">
                  <h1 className="xl:text-9xl md:text-7xl xs:text-5xl  xs:font-bold ">CREATIVE</h1>
                  <h1 className="xl:text-9xl md:text-7xl xs:text-5xl   xs:font-bold ">DEVELOPER</h1>
                </div>
                <p className=" md:text-[1.5rem] md:max-w-[800px] xs:text-[1.2rem] font-clashDisplay font-light tracking-wide">I&apos;m helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.</p>
                <Magnetic>
                <button className=" border border-[#eeeeee] px-10 py-4 rounded-full font-clashDisplay text-[1.5rem]  tracking-wide md:w-[350px]">Drop me a line</button>
                </Magnetic>
                {/* <p className=" md:text-[2rem] xs:text-[1.2rem] font-light font-clashDisplay tracking-widest">For Creative Brands</p> */}
              </div>
            </div>
            <div className="md:col-span-2 md:pt-36 flex justify-end ">
              <small>specialized in Web Design, UX / UI, Webflow, and Front End Development.</small>
            </div>
          
        </section>
        
        <section className=" pb-[16rem] py-4 grayscale thesection pt-20 bg-[#EEE] text-black">
            
            <div className="relative">
              {/* <div className="absolute right-0 left-0">
                <h1 className=" md:text-9xl flex justify-between">
                  <span>PEACE</span>
                  <span>DAVID</span>
                   
                  </h1>
              </div> */}
              <Image
                src="/images/profile2.jpg"
                width={1000}
                height={1000}
                alt="boy"
              />
            </div>
            <div className="grid max-w-[1500px] m-auto md:px-20 xs:px-4 ">
              
              <p className=" font-clashDisplay font-light md:text-[1.8rem] xs:text-[1.2rem] py-10  col-span-3 tracking-wide " ref={myText} >Hey there,  I&apos;m Peace David  a passionate front-end developer capable of fullstack (nodejs/expessjs,nextjs) with 3 years of experience, coupled with a strong affinity for design. I specialize in crafting innovative digital experiences, products, solutions, and crafting compeling narratives. My love for creativity sets me apart, driving me to constantly seek new approaches and push boundaries. </p>
            </div>
        </section>
        <section className=" md:px-20 xs:px-4  pb-[16rem]  max-w-[1500px] m-auto ">
          <h1 className=" font-Archivo md:text-5xl font-light pb-14">Here is how I can help you...</h1>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="w-[300px] h-[300px] border-l border-[#eeeeee00] grid grid-rows-2">
              <h1 className=" font-Archivo font-bold text-2xl flex items-end">WEB DEVELOPMENT</h1>
              <div className=" flex items-end">
              <p className=" font-light font-clashDisplay ">I specialize in building custom web applications from scratch using JavaScript frameworks like ReactJS</p>
              </div>
            </div>
            <div className="w-[300px] h-[300px] border-l border-[#eeeeee00] grid grid-rows-2">
              <h1 className=" font-Archivo font-bold text-2xl flex items-end">WEB DEVELOPMENT</h1>

              <div className=" flex items-end">
              <p className=" font-light font-clashDisplay ">I specialize in building custom web applications from scratch using JavaScript frameworks like ReactJS</p>
              </div>
            </div>
            <div className="w-[300px] h-[300px] border-l border-[#eeeeee00] grid grid-rows-2">
              <h1 className=" font-Archivo font-bold text-2xl flex items-end">WEB DEVELOPMENT</h1>

              <div className=" flex items-end">
              <p className=" font-light font-clashDisplay ">I specialize in building custom web applications from scratch using JavaScript frameworks like ReactJS</p>
              </div>
            </div>
           
           
            
          </div>
        </section>
        
        <section className=" md:px-10 xs:px-4 pb-[16rem] max-w-[1500px] m-auto ">
            <div className="md:px-10 xs:px-0 ">
            <h1 className=" font-Archivo md:text-5xl   font-light" >SELECTED WORK</h1>
            {/* <h1 className=" font-clashDisplay font-bold xl:text-9xl md:text-7xl xs:text-4xl">SELECTED </h1>
            <h1 className=" font-clashDisplay font-bold xl:text-9xl md:text-7xl xs:text-4xl flex justify-end">WORK</h1> */}

            </div>
            
            <main ref={container} className="relative mt-[10vh] ">
              {
                projects.map( (project, i) => {
                  const targetScale = 1 - ( (projects.length - i) * 0.05);
                  return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                })
              }
            </main>
           
          
          
            
        </section>
       


        <section className="md:px-20 xs:px-4 pb-[16rem] max-w-[1500px] m-auto">
          <div className="pb-10">
          <h1 className=" font-Archivo md:text-5xl   font-light" >ARTICLES AND STORY</h1>

          </div>
          <div className="font-Archivo flex flex-col justify-between flex-wrap">
            <div className=" grid xs:gap-4 md:grid-cols-6 border-b border-[#e9e9e91a] pt-8 pb-10">
              <div className="">
                <p>13 May 2024</p>
                
              </div>
              <div className="  md:col-span-4 flex flex-col gap-6">
                <div>
                 <small className="">ARTICLE</small>

                </div>
                <div>
                <h2 className=" text-[2rem] font-bold leading-[1] pb-1">THE MYSTRY OF CREATIVE</h2>
                <p className=" font-clashDisplay ">get in the house or you get spankt.... i am the only the one with the most honest thinking </p>
                </div>
                <div>
                <div className=' flex list-none  items-center gap-1'>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>UI/UX</li>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>Web Development</li>
                </div>

                </div>
              </div>
              <div className=" flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </div>
            </div>
            <div className=" grid xs:gap-4 md:grid-cols-6 border-b border-[#e9e9e91a] pt-8 pb-10">
              <div className="">
                <p>13 May 2024</p>
                
              </div>
              <div className="  md:col-span-4 flex flex-col gap-6">
                <div>
                 <small className="">ARTICLE</small>

                </div>
                <div>
                <h2 className=" text-[2rem] font-bold leading-[1] pb-1">THE MYSTRY OF CREATIVE</h2>
                <p className=" font-clashDisplay ">get in the house or you get spankt.... i am the only the one with the most honest thinking </p>
                </div>
                <div>
                <div className=' flex list-none  items-center gap-1'>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>UI/UX</li>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>Web Development</li>
                </div>

                </div>
              </div>
              <div className=" flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </div>
            </div>
            <div className=" grid xs:gap-4 md:grid-cols-6 border-b border-[#e9e9e91a] pt-8 pb-10">
              <div className="">
                <p>13 May 2024</p>
                
              </div>
              <div className="  md:col-span-4 flex flex-col gap-6">
                <div>
                 <small className="">ARTICLE</small>

                </div>
                <div>
                <h2 className=" text-[2rem] font-bold leading-[1] pb-1">THE MYSTRY OF CREATIVE</h2>
                <p className=" font-clashDisplay ">get in the house or you get spankt.... i am the only the one with the most honest thinking </p>
                </div>
                <div>
                <div className=' flex list-none  items-center gap-1'>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>UI/UX</li>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>Web Development</li>
                </div>

                </div>
              </div>
              <div className=" flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </div>
            </div>
            <div className=" grid xs:gap-4 md:grid-cols-6 border-b border-[#e9e9e91a] pt-8 pb-10">
              <div className="">
                <p>13 May 2024</p>
                
              </div>
              <div className="  md:col-span-4 flex flex-col gap-6">
                <div>
                 <small className="">ARTICLE</small>

                </div>
                <div>
                <h2 className=" text-[2rem] font-bold leading-[1] pb-1">THE MYSTRY OF CREATIVE</h2>
                <p className=" font-clashDisplay ">get in the house or you get spankt.... i am the only the one with the most honest thinking </p>
                </div>
                <div>
                <div className=' flex list-none  items-center gap-1'>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>UI/UX</li>
                  <li className='p-1 px-4 border border-[#EEEEEE] rounded-full'>Web Development</li>
                </div>

                </div>
              </div>
              <div className=" flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </div>
            </div>
            
            
          </div>
        </section>
        {/* <section className=" md:p-10 xs:p-4 md:h-screen  grid md:grid-cols-6">
          <div className="md:col-span-2"></div>
          <div className="md:col-span-4 ">
          <p  className=" font-Archivo font-bold md:text-2xl xs:text-2xl">
            Let&apos;s add some flavor to your team! I&apos;m not your average full-stack developer – I bring three years of experience and a strong passion for design to the table.
            </p>
            <p className=" font-Archivo font-bold md:text-2xl xs:text-2xl">
            Picture this: crafting mesmerizing digital experiences that captivate users and drive results. That&apos;s where I excel. I don&apos;t just write code; I sculpt solutions. My secret sauce? A relentless pursuit of innovation.
            </p>
            <br/>
            <br/>
          
            
            <p className=" font-satoshi md:text-2xl xs:text-2xl">
            What sets me apart? It&apos;s not just about technical skills; it&apos;s about infusing every project with creativity and ingenuity. I&apos;m committed to making a real impact and pushing boundaries in the digital space.
            </p>
            <p className=" font-satoshi md:text-2xl xs:text-2xl">
            Looking for someone to spice up your team and bring fresh ideas to the table? Let&apos;s chat! Together, we can create something truly remarkable.
            
            </p> 
          </div>
        </section> */}

        {/* <section>
            <h1>Over the years I spend my time using this softwares</h1>
        </section> */}
    
     
    </>
  );
}
