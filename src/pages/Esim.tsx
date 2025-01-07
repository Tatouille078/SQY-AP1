import React from 'react';
import bg from '../assets/bg.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Esim() {

    return (
        <>
            <img src={bg} alt="" className="fixed -z-10 w-full h-full object-cover" />
            <Header />
            <div className='w-full h-full flex justify-center items-center montserrat'>
                <div className='p-0.5 bg-gradient-to-r from-[#0083ae] to-[#162449] mt-[20vh] rounded-xl'>
                    <div className='w-[60vw] flex flex-col justify-center text-center bg-gradient-to-r from-[#0f4659] to-[#0b1328] rounded-xl p-8 text-white text-xl'>
                        <h1 className='font-semibold text-2xl lg:text-7xl nova'>Esim</h1>
                        <div className='flex flex-col items-start'>
                            <div className="self-center rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                                <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full  lg:px-4 text-2xl">Appels :</p>
                            </div>
                            <div className='flex mx-8 mt-6 justify-center '>
                                <p>Heure :</p>
                                <div className='ml-12 flex'>
                                    <p>limité :</p>
                                    <input type="range" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Illimité :</p>
                                    <input type="radio" name="telHeure" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Aucune :</p>
                                    <input type="radio" name="telHeure" className='ml-4' />
                                </div>
                            </div>
                            <div className='flex mx-8 ml-[6.5rem] mt-6 justify-center '>
                                <div className='ml-12 flex'>
                                    <p>France uniquement :</p>
                                    <input type="radio" name='telPays' className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Dans UE :</p>
                                    <input type="radio" name="telPays" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Tous pays :</p>
                                    <input type="radio" name="telPays" className='ml-4' />
                                </div>
                            </div>
                            <div className="self-center rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                                <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full  lg:px-4 text-2xl">sms/mms :</p>
                            </div>
                            <div className='flex mx-8 mt-6 justify-center '>
                                <div className='ml-[7.5rem] flex'>
                                    <p>limité :</p>
                                    <input type="range" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Illimité :</p>
                                    <input type="radio" name="telSms" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Aucun :</p>
                                    <input type="radio" name="telSms" className='ml-4' />
                                </div>
                            </div>
                            <div className="self-center rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                                <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full  lg:px-4 text-2xl">Internet :</p>
                            </div>
                            <div className='flex mx-8 mt-6 justify-center '>
                                <p>Giga / mois :</p>
                                <div className='ml-4 flex'>
                                    <p>limité :</p>
                                    <input type="range" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Illimité :</p>
                                    <input type="radio" name="telDebit" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Aucun :</p>
                                    <input type="radio" name="telDebit" className='ml-4' />
                                </div>
                            </div>
                            <div className='flex mx-auto mt-6 justify-center'>
                                <div className=' flex'>
                                    <p>4G :</p>
                                    <input type="radio" name="telReseau" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>5G :</p>
                                    <input type="radio" name="telReseau" className='ml-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-16 flex justify-center items-center p-2'>
                <div className="rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                    <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full cursor-pointer lg:px-4 text-2xl">
                        passer à l'achat
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Esim;