import React from 'react'

import hero1 from '@/assets/images/hero1.png';
import hero2 from '@/assets/images/hero2.png';
import hero3 from '@/assets/images/hero3.png';
import hero4 from '@/assets/images/hero4.png';
import hero5 from '@/assets/images/hero5.png';
import hero6 from '@/assets/images/hero6.png';

const images = [
    { src: hero1, desc: 'Sports nautiques,plongée, voile' },
    { src: hero2, desc: 'Randonnées et vélo ' },
    { src: hero3, desc: 'Casino et vie ' },
    { src: hero4, desc: 'marchés provençaux' },
    { src: hero5, desc: 'Un paradis pour les golfeurs ' },
    { src: hero6, desc: 'Montagne et vélo de route' },
];

function Third() {
    return (
        <div
            className="menu flex flex-col justify-center items-center gap-4 h-[450px] relative
    bg-[linear-gradient(to_right,#4097FF_0%,rgb(98,158,231)_50%,rgb(98,158,200)_75%,transparent_100%),url('@/assets/images/hero.jpg')]
    bg-cover bg-center"
        >
            <div className='w-[40%] px-auto text-center text-white'>
                <h1>
                    Saint Raphaël,l’endroit parfait<br /> <span>pour vivre la Côte d’Azur</span>
                </h1>
                <p>Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.</p>
            </div>
            <div className='w-full mx-[5rem] flex justify-center p-2'>
                {images.map((img, index) => (
                    <div key={index} className='flex flex-col px-[5em] text-white items-center'>
                        <img
                            src={img.src}
                            alt={img.desc}
                            className='h-30 w-auto rounded-full object-cover'
                        />
                        <div className='text-sm mt-1 text-white text-center'>{img.desc}</div>
                    </div>
                ))}
            </div>
            <div className='w-[40%] px-auto text-center text-white'> 
                <h1 >Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !</h1>
            </div>
        </div>
    )
}

export default Third