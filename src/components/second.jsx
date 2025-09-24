import React from 'react';
import hero1 from '@/assets/images/section_confort/image1.png';
import hero2 from '@/assets/images/section_confort/image2.png';
import { CircleChevronRight } from 'lucide-react';
import { SectionTitle } from './commons/section-title';

function Second() {
	return (
		<div className='flex gap-4 py-[10rem] justify-between items-stretch'>
			<div className='w-1/2 py-24 padding-container'>
				<div className=''>
					<SectionTitle
						title="Le confort et la serenité d'un"
						subtitle='appartement privé'
					/>
					<p className='mb-10'>
						Blu Azur vous propose des appartements élégants et spacieux, conçus
						pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
						moderne, ils sont parfaits pour une escapade détente ou un séjour
						prolongé.
					</p>
				</div>
				<div>
					<h1 className='text-2xl mb-6 font-[400]'>Les inclusions :</h1>
					<ul className='list-disc list-inside'>
						<li>Stationnement privé</li>
						<li>Piscine extérieure avec chaises longues</li>
						<li>Linge de lit et serviettes</li>
						<li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
						<li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
						<li>
							Kit bébé: comprend un lit parapluie avec un vrai matelas et une
							chaise haute
						</li>
						<li>
							Autres commodités en prêt à la réception: jeux de société, livres,
							raquettes et balles de ping-pong, sèche-cheveux, fer et planche à
							repasser, adaptateur pour les prises étrangères et cache-prises
							pour les enfants.
						</li>
					</ul>
				</div>
			</div>
			<div className='w-1/3 flex justify-center items-center gap-2 relative'>
				<img
					src={hero1}
					alt='Appartement'
					className='w-3/4 h-full object-cover rounded-2xl'
				/>
				<img
					src={hero2}
					alt='Appartement'
					className='w-1/2 h-5/6 object-cover rounded-2xl'
				/>
				<div className='w-5 absolute right-5 bottom-[50%]'>
					<CircleChevronRight
						color='#fff'
						opacity={0.75}
					/>
				</div>
			</div>
		</div>
	);
}

export default Second;
