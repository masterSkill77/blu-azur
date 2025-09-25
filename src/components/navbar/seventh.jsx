import React from 'react'
import { CircleChevronRight } from 'lucide-react'

function seventh() {
  return (
    <div className="bg-[url('assets/images/piscine.png')] bg-center bg-cover flex items-center justify-center h-[500px]">       
        <div className='w-[40%] flex items-center flex-col text-center text-white'>
            <h1 className='text-2xl font-bold'>Réservations</h1>
            <p className='text-xl'> <span className='font-bold'>Offrez-vous un séjour inoubliable</span> dans l’un de nos appartements Blu Azur. Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.</p>
        <button className="bg-[#4097FF] flex items-center gap-4 text-white border border-white py-3 px-6 rounded-full mt-10 font-bold">
          <a href='' className="whitespace-nowrap">
            Réservez dès maintenant votre séjour !
          </a>
          <CircleChevronRight />
        </button>

        </div>
    </div>
  )
}

export default seventh



