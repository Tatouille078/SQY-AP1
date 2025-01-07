import React from 'react';
import bg from '../assets/bg.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Box() {

    return (
        <>
            <img src={bg} alt="" className="fixed -z-10 w-full h-full object-cover" />
            <Header />
            <div className='w-full h-full flex justify-center items-center montserrat'>
                <div className='p-0.5 bg-gradient-to-r from-[#0083ae] to-[#162449] mt-[20vh] rounded-xl'>
                    <div className='w-[60vw] flex flex-col justify-center text-center bg-gradient-to-r from-[#0f4659] to-[#0b1328] rounded-xl p-8 text-white text-xl'>
                        <h1 className='font-semibold text-2xl lg:text-7xl nova'>Box</h1>
                        <div className='flex flex-col items-start'>
                            <div className="self-center rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                                <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full lg:px-4 text-2xl">Débits :</p>
                            </div>
                            <div className='flex mx-8 mt-6 justify-center '>
                                <div className='ml-12 flex'>
                                    <p>Débit montant :</p>
                                    <input type="range" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Débit descendant :</p>
                                    <input type="range" className='ml-4' />
                                </div>
                            </div>
                            <div className="self-center rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                                <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full lg:px-4 text-2xl">Wi-Fi :</p>
                            </div>
                            <div className='flex mx-8 ml-44 mt-6 justify-center '>
                                <div className='ml-[7.5rem] flex'>
                                    <p>4 :</p>
                                    <input type="radio" name='boxSms' className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>5 :</p>
                                    <input type="radio" name="boxSms" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>6 :</p>
                                    <input type="radio" name="boxSms" className='ml-4' />
                                </div>
                            </div>
                            <div className="self-center rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0 text-white">
                                <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full lg:px-4 text-2xl">Options :</p>
                            </div>
                            <div className='flex mx-8 mt-6 justify-center ml-16'>
                                <div className='ml-4 flex'>
                                    <p>Pare-feu amélioré :</p>
                                    <input type="checkbox" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Règle  de NAT :</p>
                                    <input type="checkbox" className='ml-4' />
                                </div>
                                <div className='ml-12 flex'>
                                    <p>Accès VPN :</p>
                                    <input type="checkbox" className='ml-4' />
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

export default Box;