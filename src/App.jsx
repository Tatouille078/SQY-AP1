import { useState } from 'react'
import './App.css'
import bg from './assets/bg.png'
import Header from './components/Header'

function App() {

  return (
    <>
      <img src={bg} alt="background" className='absolute inset-0 -z-20 w-full h-full overflow-auto' />
      <Header />
      <div className='montserrat ml-32 mt-[30vh] flex justify-start flex-wrap text-white'>
        <h1 className='w-full flex flex-wrap justify-start self-start text-7xl'>Un Petit
          <p className='pl-3 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'> Oiseau</p>, Un Grand
          <p className='pl-3 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'>Réseau</p>.
        </h1>
      </div>
      <div className='flex w-[90vh] mt-[10vh] justify-start ml-32 text-xl flex-wrap text-white nova'>
        <p>Chez Colibri, nous plaçon vos besoin au coeur de nos services. Notre mission: vous offrir une expérience <b className='pl-1 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'>INTERNET</b> et <b className='pl-1 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold'>TELEPHONIQUE</b> entièrement personnalisable pour répondre parfaitement à vos attentes.</p>
      </div>
    </>
  )
}

export default App
