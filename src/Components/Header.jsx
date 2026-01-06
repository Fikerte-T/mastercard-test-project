import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-10 text-white lg:px-32'>
        <div>
            <img className='w-[40px] h-[40px]' src="src/assets/tutor-icon.png" alt="training icon" />
        </div>
        
        <nav>
            <ul className='flex justify-evenly'>
                <li className='px-2 md:px-6 hover:text-link'>
                    <NavLink to="/tutors">Tutors</NavLink>
                </li>
                 <li className='px-2 md:px-6 hover:text-link'>
                    <NavLink to="/subjects">Subjects</NavLink>
                </li>
                 <li className='px-2 md:px-6 hover:text-link'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    
    </div>
  )
}

export default Header