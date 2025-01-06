import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import { PiShoppingCartBold, PiMapPinSimple } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";

const Header: React.FC = () => {

    return (
        <div className='w-full h-full flex justify-center mx-0'>
            <header className='flex align-middle items-center justify-between rounded-b-2xl h-[3.25rem] bg-opacity-55 bg-black w-[1050px]'>
                <div className='h-full flex align-middle items-center text-white mx-8'>
                    <h1 className='text-3xl mr-12 nova'>Colibri</h1>
                    <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
                        <PiMapPinSimple className='w-full h-full py-3 px-6 border-b-2 group-hover:border-cyan-500 border-transparent transition-all' />
                    </div>
                    <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
                        <IoChatboxEllipsesOutline className='w-full h-full py-3 px-6 border-b-2 group-hover:border-cyan-500 border-transparent transition-all' />
                    </div>
                    <div className='h-full flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
                        <HiShoppingBag className='w-full h-full py-3 px-6 border-b-2 group-hover:border-cyan-500 border-transparent transition-all' />
                    </div>
                    <div className='h-full max-w-80 flex justify-center items-end group border-x border-transparent hover:border-cyan-800 hover:bg-gradient-to-t from-cyan-700 to-gray-900 transition-all'>
                        <FiSearch className='w-full h-full py-3 px-6' />
                        <input type="text" className='flex self-center rounded-xl bg-transparent mr-6 px-3' />
                    </div>
                </div>
                <div className='text-white flex items-center text-center gap-10 mx-8'>
                    <h2 className='rounded-full min-w-32 px-4 pb-1 bg-gradient-to-r from-[#045874] to-[#0E1730]'>Espace Abonné</h2>
                    <PiShoppingCartBold className='text-2xl' />
                    <TbSettings className='text-2xl' />
                </div>
            </header>
        </div>
    )
}

export default Header;