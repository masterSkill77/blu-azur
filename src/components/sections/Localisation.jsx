import React from 'react';
import { CircleChevronRight } from 'lucide-react';
import fondEcran from '@/assets/images/fond-ecran.png';
import mapImage from '@/assets/images/map.png';
import Map from '@/assets/images/photo_map.png';
import { SectionTitle } from '../commons/section-title';

function Localisation() {
	return (
		<div
			className='flex justify-between items-start bg-cover min-h-[800px] py-2 bg-center relative'
			style={{ backgroundImage: `url(${fondEcran})` }}>
			
			<div className='flex  mt-[50px]'>
				<div className='w-2/3 padding-container text-justify'>
					<SectionTitle
						title='Où se trouve Blu Azur à'
						subtitle='Saint-Raphaël ?'
					/>
					<p className='mt-4 mb-4'>
					Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
					</p>
					<div className='flex justify-between items-center gap-4 text-[#4097FF] border border-[#4097FF] p-3 rounded-full'>
						<button>
							<a href=''>Comment s’y rendre ?</a>
						</button>
						<CircleChevronRight />
					</div>
				</div>
			</div>

			<div className='relative  h-[400px] rounded-lg shadow-lg'>
				<img
					src={Map}
					alt='Map'
					className='w-full h-full object-cover'
				/>
				<div className='absolute top-[-20px] left-[-20px] w-[70px] h-auto border-4 border-white rounded-lg shadow-lg overflow-hidden'>
					<img
						src={mapImage}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Localisation;
