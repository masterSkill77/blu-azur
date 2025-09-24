import React from 'react';
import { CircleChevronRight } from 'lucide-react';
import fondEcran from '@/assets/images/fond-ecran.png';
import mapImage from '@/assets/images/map.png';
import Map from '@/assets/images/photo_map.png';
import { SectionTitle } from './commons/section-title';

function Fourth() {
	return (
		<div
			className='flex justify-between items-start p-10 bg-cover bg-center relative'
			style={{ backgroundImage: `url(${fondEcran})` }}>
			{/* Texte */}
			<div className='flex justify-center mt-[50px]'>
				<div className='w-[40%] mx-auto text-justify'>
					<SectionTitle
						title='Où se trouve Blu Azur à'
						subtitle='Saint-Raphaël ?'
					/>
					<p className='mt-4 mb-4'>
						Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur
						de l’une des plus belles stations balnéaires de France...
					</p>
					<div className='flex justify-between items-center gap-4 text-[#4097FF] border border-[#4097FF] p-3 rounded-lg'>
						<button>
							<a href=''>Réservez Maintenant</a>
						</button>
						<CircleChevronRight />
					</div>
				</div>
			</div>

			{/* Image en background */}
			<div className='relative w-[40%] h-[400px] rounded-lg shadow-lg'>
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

export default Fourth;
