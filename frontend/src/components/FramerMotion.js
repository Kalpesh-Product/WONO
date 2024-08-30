import React from 'react'
import {motion} from 'framer-motion'

const FramerMotion = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className='w-full flex gap-20'>
        <div>
            <div className='py-4 font-titleFont'>
                <h2 className='text-4xl font-bold'>Development Skills</h2>
            </div>
            <div className='mt-14 w-full overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Html</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
            </div>
            <div className='mt-14 w-full overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Css</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
            </div>
            <div className='mt-14 w-full overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Javascript</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>90%</span>
                    </motion.span>
                </span>
            </div>
            <div className='mt-14 w-full overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>React</p>
                <span className='w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span  initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}}className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>80%</span>
                    </motion.span>
                </span>
            </div>
            <div className='mt-14 w-full overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>java</p>
                <span className='w-[60%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>60%</span>
                    </motion.span>
                </span>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default FramerMotion