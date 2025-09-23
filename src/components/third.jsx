import React from 'react'
import hero from '@/assets/images/hero.jpg';

import hero1 from '@/assets/images/hero.jpg';
import hero2 from '@/assets/images/hero.jpg';
import hero3 from '@/assets/images/hero.jpg';
import hero4 from '@/assets/images/hero.jpg';
import hero5 from '@/assets/images/hero.jpg';
import hero6 from '@/assets/images/hero.jpg';

const images = [
    { src: hero1, desc: 'Desc 1' },
    { src: hero2, desc: 'Desc 2' },
    { src: hero3, desc: 'Desc 3' },
    { src: hero4, desc: 'Desc 4' },
    { src: hero5, desc: 'Desc 5' },
    { src: hero6, desc: 'Desc 6' },
];

function Third() {
    return (
        <div
            className="menu flex  flex-col justify-center items-center h-[450px] relative bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to right, #4097FF 0%,rrgb(98, 158, 231) 50%,rgb(98, 158, 231) 75% ,transparent 100%), url(${hero})`
            }}
        >
            <div className='mx-[5rem] border-1 border-solid'>
                <h1>
                    Saint Raphaël,l’endroit parfait<br /> <span>pour vivre la Côte d’Azur</span>
                </h1>
                <p>Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.</p>
            </div>
            <div className='mx-[5rem] flex gap-4 border border-solid p-2'>
                {images.map((img, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <img
                            src={img.src}
                            alt={img.desc}
                            className='h-30 w-auto rounded-full object-cover'
                        />
                        <div className='text-sm mt-1 text-white'>{img.desc}</div>
                    </div>
                ))}
            </div>
            <p>
                Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !
            </p>
        </div>
    )
}

export default Third