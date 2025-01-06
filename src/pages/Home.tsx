import React from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';
import bg from '../assets/bg.png';
import esim from '../assets/esim.jpg';
import box from '../assets/box.jpg';

function Home() {
  return (
    <>
      <img src={bg} alt="" className="fixed -z-10 w-full h-full object-cover" />
      <Header />
      <div className="montserrat ml-8 lg:ml-32 mt-[20vh] lg:mt-[30vh] flex justify-center lg:justify-start text-white px-4 lg:px-0">
        <h1 className="w-full text-4xl lg:text-9xl flex  lg:flex-wrap justify-center lg:justify-start">
          Un Petit
          <p className="pl-0 lg:pl-3 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold">
            Oiseau
          </p>
          , Un Grand
          <p className="pl-0 lg:pl-3 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold">
            Réseau
          </p>
          .
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-[90vh] mt-[5vh] lg:mt-[10vh] justify-center lg:justify-start ml-8 lg:ml-32 text-lg lg:text-5xl flex-wrap text-white nova px-4 lg:px-0">
        <p className="text-center lg:text-left">
          Chez Colibri, nous plaçons vos besoins au cœur de nos services. Notre mission : vous offrir une expérience{' '}
          <b className="pl-1 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold">
            INTERNET
          </b>{' '}
          et{' '}
          <b className="pl-1 bg-gradient-to-b from-[#03C7FF] to-[#0E5885] text-transparent bg-clip-text font-semibold">
            TELEPHONIQUE
          </b>{' '}
          entièrement personnalisable pour répondre parfaitement à vos attentes.
        </p>
        <div
          className="rounded-full mt-10 lg:mt-[10vh] p-0.5 bg-gradient-to-r from-[#007ea8] to-[#1a2954] mx-auto lg:mx-0"
          onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <p className="montserrat bg-gradient-to-r from-[#045874] to-[#0E1730] px-3 py-1 rounded-full cursor-pointer lg:px-4">
            Nos offres les plus populaires
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row text-white text-lg lg:text-xl montserrat mt-20 lg:mt-60 justify-around items-center px-8 lg:px-32 mb-20 gap-10 lg:gap-0">
        <div className="flex flex-col gap-10 lg:gap-20 items-center">
          <div
            id="offres"
            className="relative shadow-xl w-full lg:w-[30vw] h-[50vh] lg:h-[70vh] bg-gradient-to-b from-[#0a130e] to-[#2690d6] rounded-xl"
          >
            <img
              src={box}
              alt=""
              className="absolute p-0.5 inset-0 w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <p className="rounded-full px-3 py-1 teuffi">En savoir plus</p>
        </div>
        <div className="flex flex-col gap-10 lg:gap-20 items-center">
          <div
            id="offres"
            className="relative shadow-xl w-full lg:w-[30vw] h-[50vh] lg:h-[70vh] bg-gradient-to-b from-[#0a130e] to-[#2690d6] rounded-xl"
          >
            <img
              src={esim}
              alt=""
              className="absolute p-0.5 inset-0 w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <p className="rounded-full px-3 py-1 teuffi">En savoir plus</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;