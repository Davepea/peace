import Image from "next/image";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,EaselPlugin,TextPlugin);

export default function Home() {


  return ( 
    <>
     <section className=" h-screen md:px-10 xs:px-4 grid grid-rows-3   ">
        
        <div className=" flex  items-end pb-[30vh] h-screen">
          <div className=" text-start">
          <h1 className=" md:text-9xl xs:text-6xl font-thin font-satoshi">CREA----TIVE</h1>
          <h1 className=" md:text-9xl xs:text-6xl font-thin font-chillax ">DEVELOPER </h1>
          {/* <p className=" text-2xl pt-4 md:w-1/2">crafting mesmerizing digital experiences that captivate users and drive results</p> */}
          </div>
        </div>
        {/* <div>
          <div className=" max-w-[400px]">
            <p className=" font-satoshi text-2xl">
              Crafting a great product needs both design and software skills. I combine them to make something that looks good and works well on different devices. Designer and engineer work together to find the right balance.
            </p>
          </div>
        </div> */}
        <div>

        </div>
        
     </section>
     <section className="h-full grid md:grid-cols-5 md:px-10 xs:px-4 xs:gap-y-16">
      <div className=" md:col-span-3 grid md:grid-rows-3 md:order-1 xs:order-2">
        <div className=" row-span-2">
        
        <p className=" font-satoshi md:text-2xl xs:text-2xl max-w-[400px] leading-9">hey there,  I&apos;m <span className="">Peace David</span>  a passionate front-end developer capable of fullstack (nodejs/expessjs,nextjs) with 3 years of experience, coupled with a strong affinity for design. I specialize in crafting innovative digital experiences, products, and solutions. My love for creativity sets me apart, driving me to constantly seek new approaches and push boundaries. </p>
       

        

       

       
        </div>
       
      </div>
      <div className="filter  md:col-span-2 md:order-2 xs:order-1">
       <Image src="/images/profile1.jpg" alt="Description of image" width={1000} height={1000} />
      </div>

     </section>
     <section className=" grid grid-cols-12 md:px-10 xs:px-4 py-8 gap-4">
        <div className=" col-span-12 ">
         <h1 className="  ">SELECTED WORKS</h1>

        </div>
        <div className=" md:col-span-7 xs:col-span-12">
          <div className="h-[500px] bg-[#ff6f61]"></div>
          <div className="py-4 pb-6">
            <p className=" font-satoshi font-thin">web development</p>
            <h1 className=" font-satoshi  text-3xl">First Project</h1>
          </div>
        </div>
        <div className=" md:col-span-5 xs:col-span-12">
          <div className="h-[500px] bg-[#ff6f61]"></div>
          <div className="py-4 pb-6">
            <p className=" font-satoshi font-thin">web development</p>
            <h1 className=" font-satoshi  text-3xl">First Project</h1>
          </div>
        </div>
        <div className=" md:col-span-4 xs:col-span-12">
          <div className="h-[500px] bg-[#ff6f61]"></div>
          <div className="py-4 pb-6">
            <p className=" font-satoshi font-thin">web development</p>
            <h1 className=" font-satoshi  text-3xl">First Project</h1>
          </div>
        </div>
        <div className=" md:col-span-8 xs:col-span-12">
          <div className="h-[500px] bg-[#ff6f61]"></div>
          <div className="py-4 pb-6">
            <p className=" font-satoshi font-thin">web development</p>
            <h1 className=" font-satoshi  text-3xl">First Project</h1>
          </div>
        </div>
       
     </section>
     <section className=" md:p-10 xs:p-4 md:h-screen flex items-center grid md:grid-cols-6">
      <div className="md:col-span-2"></div>
       <div className="md:col-span-4 ">
       <p  className=" font-satoshi md:text-2xl xs:text-2xl">
        Let&apos;s add some flavor to your team! I&apos;m not your average full-stack developer – I bring three years of experience and a strong passion for design to the table.
        </p>
        <p className=" font-satoshi md:text-2xl xs:text-2xl">
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
     </section>

     <section>
        <h1>Over the years I spend my time using this softwares</h1>
     </section>
    </>
  );
}
