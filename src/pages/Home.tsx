import React from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';
import bg from '../assets/bg.png'
import esim from '../assets/esim.jpg';
import box from '../assets/box.jpg';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <img src={bg} alt="" className='-z-10 fixed' />
      <Header />
      <div className='montserrat ml-32 mt-[30vh] flex justify-start flex-wrap text-white'>
        <h1 className='w-full flex flex-wrap justify-start self-start text-7xl'>Un Petit
          <p className='pl-3 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'> Oiseau</p>, Un Grand
          <p className='pl-3 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'>Réseau</p>.
        </h1>
      </div>
      <div className='flex w-[90vh] mt-[10vh] justify-start ml-32 text-2xl flex-wrap text-white nova'>
        <p>Chez Colibri, nous plaçons vos besoins au coeur de nos services. Notre mission: vous offrir une expérience <b className='pl-1 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'>INTERNET</b> et <b className='pl-1 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'>TELEPHONIQUE</b> entièrement personnalisable pour répondre parfaitement à vos attentes.</p>
        <div
          className='rounded-full mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954]'
          onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: "smooth" })}
        >
          <p className='montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full cursor-pointer'>Nos offres les plus populaires</p>
        </div>
      </div>
      <div className='w-full h-[80vh] flex text-white text-xl montserrat mt-60 justify-around items-center px-32 mb-20'>
        <div className='flex flex-col gap-20 items-center'>
          <div id="offres" className='relative shadow-xl w-[30vw] h-[70vh] bg-gradient-to-b from-[#0a130e] to-[#2690d6] rounded-xl '>
            <img src={box} alt="" className='absolute p-0.5 inset-0 w-full h-full object-cover object-center rounded-xl' />
          </div>
          <Link to="/box" className='rounded-full px-3 py-1 teuffi'>En savoir plus</Link>
        </div>
        <div className='flex flex-col gap-20 items-center'>
          <div id="offres" className='relative shadow-xl w-[30vw] h-[70vh] bg-gradient-to-b from-[#0a130e] to-[#2690d6] rounded-xl '>
            <img src={esim} alt="" className='absolute p-0.5 inset-0 w-full h-full object-cover object-center rounded-xl' />
          </div>
          <Link to="/esim" className='rounded-full px-3 py-1 teuffi'>En savoir plus</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;