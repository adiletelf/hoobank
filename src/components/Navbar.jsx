import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex p-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 space-x-10'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className='font-poppins font-normal cursor-pointer text-[16px]'
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <button type='button' onClick={() => setToggle((prev) => !prev)}>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
          />
        </button>

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-center items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
