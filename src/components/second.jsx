import React from 'react'
import hero from '@/assets/images/hero.jpg';
import {CircleChevronRight} from 'lucide-react';  

function Second() {
  return (
    <div className='flex gap-4 py-[1rem] relative left-[5rem]'>
      <div className='flex-1 p-4 '>
        <div className='my-[10px]'>
          <h1>Le confort et la serenite d'un <br />
            <span className='text-2xl'>appartement prive</span>
          </h1>
          <p>Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.</p>
        </div>
        <div>
          <h1 className=''>Les inclusions :</h1>
          <ul className='list-disc list-inside'>
            <li>Stationnement privé</li>
            <li>Piscine extérieure avec chaises longues</li>
            <li>Linge de lit et serviettes</li>
            <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
            <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
            <li>Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute</li>
            <li>Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.</li>
          </ul>
        </div>
      </div>
      <div className='flex-1 flex justify-end gap-6'>
        <div className='border border-black h-[400px] rounded-lg shadow-lg overflow-hidden'>
          <img src={hero} alt="Appartement" className='w-full h-full object-cover' />
        </div>
        <div className='self-center border border-black h-[300px] rounded-lg shadow-lg overflow-hidden'>
          <img src={hero} alt="Appartement" className='w-full h-full object-cover' />
          <CircleChevronRight />
        </div>
      </div>
    </div>
  )
}

export default Second