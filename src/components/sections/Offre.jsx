import React from 'react';

import hero1 from '@/assets/images/hero1.png';
import hero2 from '@/assets/images/hero2.png';
import hero3 from '@/assets/images/hero3.png';
import hero4 from '@/assets/images/hero4.png';
import hero5 from '@/assets/images/hero5.png';
import hero6 from '@/assets/images/hero6.png';
import { ServiceItem } from '@/components/images-items/service.item';
import { SectionTitle } from '../commons/section-title';

const images = [
	{ src: hero1, desc: 'Sports nautiques, plongée, voile' },
	{ src: hero2, desc: "Randonnées et vélo dans l'Estérel" },
	{ src: hero3, desc: 'Casino et vie nocturne animée' },
	{ src: hero4, desc: 'Villages perchés et marchés provençaux' },
	{ src: hero5, desc: 'Un paradis pour les golfeurs ' },
	{ src: hero6, desc: 'Montagne et vélo de route' }
];

function Offre() {
	return (
		<div
			className="menu flex flex-col justify-center items-center gap-4 min-h-[500px] py-30 relative
    bg-[url('@/assets/images/piscine_section.png')]"
			style={{ backgroundSize: 'cover' }}>
			<div className='w-[40%] px-auto text-center text-xl text-white mb-10'>
				<SectionTitle
					className={'!mb-4'}
					title={"Saint Raphaël, l'endroit parfait pour"}
					subtitle={"vivre la Côte d'Azur"}
				/>{' '}
				<p>
					Avec ses plages dorées, ses 300 jours de soleil et ses calanques
					sauvages, Saint-Raphaël est une destination de rêve. Entre mer
					turquoise et rochers rouges de l’Estérel, elle offre un cadre
					idyllique pour la détente et l’aventure.
				</p>
			</div>
			<div className='w-full mx-[5rem] flex justify-center p-2 gap-[5rem]'>
				{images.map((img, index) => (
					<ServiceItem
						key={index}
						src={img.src}
						desc={img.desc}
					/>
				))}
			</div>
			<div className='w-[40%] px-auto text-center text-xl text-white mt-30'>
				<p>
					Flânez sur la Promenade des Bains, explorez les criques secrètes ou
					partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la
					Côte d’Azur dans toute sa splendeur !
				</p>
			</div>
		</div>
	);
}

export default Offre;
