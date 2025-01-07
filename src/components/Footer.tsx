import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {

    return (
        <div className='w-full bg-slate-800 text-slate-400 flex flex-col justify-center items-center p-12'>
            <div className='h-full text-lg flex gap-32 justify-start items-start'>
                <div className='flex gap-2 flex-col flex-wrap'>
                    <p className='font-semibold mb-4 text-white'>Informations</p>
                    <p>Foire aux questions</p>
                    <p>Blog</p>
                    <p>Support</p>
                </div>
                <div className='flex gap-2 flex-col flex-wrap'>
                    <p className='font-semibold mb-4 text-white'>Entreprise</p>
                    <p>À propos de nous</p>
                    <p>Carrières</p>
                    <p>Conctactez nous</p>
                </div>
                <div className='h-44 flex flex-col justify-center items-start gap-2 bg-slate-700 px-8'>
                    <p className='text-white'>Souscrivez-vous à la newsletter !</p>
                    <form className="flex items-center">
                        <input type="email" placeholder="Adresse mail..."
                            className="px-4 py-2 rounded-l-md text-sm min-h-10 text-black focus:outline-none w-full" />
                        <button type="submit"
                            className="px-4 py-2 bg-blue-500 min-h-10 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                            <FaArrowRight size={22}/>
                        </button>
                    </form>
                </div>
            </div>
            <div className='border-t w-[60vw] mt-8 flex justify-between'>
                <div></div>
                <div className='flex gap-8 ml-24 mt-6'>
                    <p>Confidentialités</p>
                    <p>Cookies</p>
                </div>
                <div className='flex mt-6 mr-6 gap-6'>
                    <FaTwitter size={30} className=' border border-slate-400 p-1 rounded-xl'/>
                    <FaFacebook size={30} className=' border border-slate-400 p-1 rounded-xl'/>
                    <FaLinkedin size={30} className=' border border-slate-400 p-1 rounded-xl'/>
                </div>
            </div>
            <p className='mt-4'>SQRL au capital de 630 00 euros, SIRET 123 456 789 00010, mail : colibri@gmail.com, N°TVA : FR84 123456789</p>
            <p>siège social 6 Terr, BOIELDIEU 92800 Puteaux, Tel : 01 12 45 78 98</p>
            <p className='mt-4'>@2024 COLIBRI FRANCE</p>
        </div>
    )
}

export default Footer;