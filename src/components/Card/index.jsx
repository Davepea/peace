'use client'
import Image from 'next/image';

import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  // const blur = useTransform(scale, [1, targetScale], [0, 100]);
  const blur = useTransform(progress, [0, 1], [0, 20]); 
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 ">
      <motion.div 
        style={{backgroundRepeat:`no-repeat`, backgroundSize:`cover`, scale, top:`calc(-5vh + ${i * 40}px)`, filter: `blur(${blur}px)` }} 
        className="flex flex-col relative top-[-45%] bg-[#efc050] md:h-[90vh] xs:h-[50vh] rounded-2xl px-[40px] py-6  w-full"
      >
        <div className=' flex justify-between items-center'>
          <div>{title}  2024</div>
        <div className=' flex list-none justify-end items-center gap-1'>
          <li className='p-1 px-4 bg-[#1212123b] rounded-full'>UI/UX</li>
          <li className='p-1 px-4 bg-[#1212123b] rounded-full'>Web Development</li>
        </div>
        </div>
        <h2 className=' absolute grid place-items-center top-0 bottom-0 right-0 left-0 md:text-8xl text-center p-10 font-Archivo font-thin'>{title}</h2>
        {/* <div >
            <motion.div
              
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              />
            </motion.div>
          </div> */}
        
      </motion.div>
    </div>
  )
}

export default Card