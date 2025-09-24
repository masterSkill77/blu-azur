import React from 'react'
import GroupImage from '@/assets/images/group6.png';
import fondEcran from '@/assets/images/pic_ours.png';
function fifth() {
  return (
    <div 
      className='flex justify-between  bg-cover bg-center relative pl-[5rem] py-[3rem]'
      style={{ backgroundImage: `url(${fondEcran})` }}
    >
      <div className='flex-1 flex justify-center items-center'>
        <div className='w-[30%]'>
          <img src={GroupImage} alt="Group" className='w-full h-full object-cover'/>
        </div>
      </div>
      <div className='flex-1 self-center text-white flex justify-start'>  
        <div className=' w-[60%] flex flex-col'>
          <h1 className='text-4xl font-bold text-right'>Un point de départ idéal <br />
            pour <span className=' font-bold'>découvrir la Côte d’Azur !</span>
          </h1>
          <p className='text-justify'>Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable. </p>
        </div>
      </div>

    </div>
  )
}

export default fifth