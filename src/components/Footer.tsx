import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {

    return (
        <div className='w-full bg-slate-800 text-slate-400 flex flex-col justify-center items-center p-12'>
            <div className='h-full text-lg flex gap-32 justify-start items-start'>
                <div className='flex gap-2 flex-col flex-wrap'>
                    <p className='font-semibold mb-4 text-white'>Employés</p>
                    <p>Base de données employés</p>
                    <p>Fiche de paie</p>
                    <p>Abscences</p>
                    <p>Planning</p>
                    <p>Recrutement</p>
                </div>
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
                    <p>Autres Médias</p>
                </div>
                <div className='h-44 flex flex-col justify-center items-start gap-2 bg-slate-700 px-8'>
                    <p className='text-white'>Souscrivez-vous à la newsletter !</p>
                    <form onSubmit={e => e.preventDefault()} className="flex items-center">
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
                <div>

                </div>
                <div className='flex gap-8 mt-6'>
                    <p>Termes & Services</p>
                    <p>Confidentialités</p>
                    <p>Cookies</p>
                </div>
                <div className='flex mt-6 mr-6 gap-6'>
                    <FaTwitter size={30} className=' border border-slate-400 p-1 rounded-xl'/>
                    <FaFacebook size={30} className=' border border-slate-400 p-1 rounded-xl'/>
                    <FaLinkedin size={30} className=' border border-slate-400 p-1 rounded-xl'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;