import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center py-20 sm:py-0 md:py-0 lg:py-30 text-white'>
        <div className='text-center flex flex-col items-center justify-center lg:space-y-10 space-y-6 w-[75%] lg:w-[60%]'>
            <h1 className='text-4xl lg:text-6xl font-bold tracking-wide'>Find Your Perfect Tutor</h1>
            <p className='text-sm md:text-base lg:w-[90%]'>Whether studying for a big exam, learning something new, or brushing up on old skills, the right
                tutor can help you feel empowered, knowledgeable, and ready for anything.
            </p>
            <div className='flex space-x-10'>
                <button className='rounded-sm bg-button text-sm px-2 md:px-4 md:text-base py-2 hover:bg-button/50' onClick={() => navigate('/login')} >Find Your Tutor</button>
                <button className='rounded-sm bg-button text-sm px-2 md:px-4 md:text-base py-2 hover:bg-button/50' onClick={() => navigate('/login')} >Featured Tutors</button>
            </div>
        </div>
    </div>
  )
}

export default Hero