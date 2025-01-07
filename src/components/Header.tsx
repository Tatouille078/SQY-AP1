import React from 'react'
import { PiShoppingCartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'

const Header: React.FC = () => {

  return (
    <div className='w-full h-full flex justify-center mx-0'>
      <header className='flex align-middle items-center justify-between rounded-b-2xl h-[3.25rem] bg-opacity-55 bg-black w-[1050px]'>
        <div className='h-full flex items-center text-white mx-8'>
          <Link to="/" className='text-3xl nova'>Colibri</Link>
          <img src={Logo} alt="Icon" className="w-6 h-6 mx-4" />
          <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
            <div className='w-full h-full border-b-2 group-hover:border-cyan-500 border-transparent transition-all'>
              <HiShoppingBag className='w-full h-full py-3 px-6 group-hover:scale-105 group-hover:-rotate-[25deg] transition-all' />
            </div>
          </div>
          <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
            <div className='w-full h-full border-b-2 group-hover:border-cyan-500 border-transparent transition-all'>
              <FiSearch className='w-full h-full py-3 px-6 group-hover:scale-105 group-hover:-rotate-[25deg] transition-all' />
            </div>
          </div>
        </div>
        <div className='h-full text-white flex items-center text-center mx-8'>
        <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
            <div className='w-full h-full border-b-2 group-hover:border-cyan-500 border-transparent transition-all'>
              <PiShoppingCartBold className='w-full h-full py-3 px-6 group-hover:scale-105 group-hover:-rotate-[25deg] transition-all' />
            </div>
          </div>
          <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
            <div className='w-full h-full border-b-2 group-hover:border-cyan-500 border-transparent transition-all'>
              <TbSettings className='w-full h-full py-3 px-6 group-hover:scale-105 group-hover:-rotate-90 transition-all' />
            </div>
          </div>
          <h2 className='rounded-full min-w-32 px-4 pb-1 bg-gradient-to-r  from-[#045874] to-[#0E1730]'>Espace Abonné</h2>
        </div>
      </header>
    </div>
  )
}

export default Header;