import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {
	Facebook,
	Youtube,
	Instagram,
	Twitter,
	CircleChevronRight
} from 'lucide-react';
import { SectionTitle } from '../commons/section-title';

// bg-[url(assets/images/hero.jpg)] bg-cover bg-center

export const Menu = () => {
	return (
		<>
			<div
				className="menu flex h-screen relative
				bg-[linear-gradient(to_right,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.1)_50%,transparent_100%),url('assets/images/hero.jpg')]
				bg-cover bg-center">
				<div className='w-[70px] bg-[#4097FF] opacity-50 flex flex-col justify-end'>
					<div className='text-white flex flex-col gap-4 mb-10 items-center'>
						<Facebook />
						<Youtube />
						<Instagram />
						<Twitter />
					</div>
				</div>
				<div className='w-full flex flex-col  padding-container  mt-[10px] absolute top-[20px]'>
					<div className=' border-b border-white/50 h-[50px] justify-between w-full'>
						<nav className='flex justify-between items-center'>
							<h1 className='text-white'>BLU AZUR</h1>
							<ul className='flex gap-10 items-center'>
								<li>
									<a
										href=''
										className='active:underline underline-offset-1 text-white'>
										A propos
									</a>
								</li>
								<li>
									<a
										href=''
										className='active:underline underline-offset-1  text-white'>
										Localisation
									</a>
								</li>
								<li>
									<a
										href=''
										className='active:underline underline-offset-1  text-white'>
										Activites
									</a>
								</li>
								<li className=''>
									<button className='py-2 px-10 rounded-full bg-[#4097FF] text-white font-bold'>
										Réservé
									</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className='flex justify-between w-full pt-64'>
						<div className='w-1/2'>
							<SectionTitle
								reversed={true}
								title={'Votre évasion'}
								subtitle={"sur la Côte d'Azur !"}
								className={'text-white text-6xl'}
							/>

							<p className='text-white mt-4 w-2/3 text-justify'>
								Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
								destination d’exception nichée entre Cannes et Saint-Tropez. Nos
								appartements tout équipés, situés dans un domaine privé
								sécurisé, offrent un cadre verdoyant et paisible, à quelques pas
								de la marina de Santa Lucia, des plages de sable fin et du
								centre-ville animé. Profitez d’un séjour alliant confort,
								sérénité et élégance au cœur de la Riviera française !
							</p>
							<button className='flex justify-between items-center gap-4 text-white border-1 border-solid border-white py-3 px-8 rounded-full w-2/3 mt-26 font-bold'>
								<a href=''>Réservez dès maintenant votre séjour</a>
								<CircleChevronRight />
							</button>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};
