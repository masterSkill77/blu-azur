import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Facebook, Youtube, Instagram, Twitter, CircleChevronRight } from 'lucide-react';

// bg-[url(assets/images/hero.jpg)] bg-cover bg-center

export const Menu = () => {

	return <>
			<div
				className="menu flex h-[450px] relative 
				bg-[linear-gradient(to_right,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.1)_50%,transparent_100%),url('assets/images/hero.jpg')] 
				bg-cover bg-center"
			>
			<div className='min-[3556px]:w-[171px] bg-[#4097FF] opacity-50 flex flex-col justify-end'>
				<div className='text-white flex flex-col gap-4 mb-10 items-center'>
					<Facebook />
					<Youtube />
					<Instagram />
					<Twitter />
				</div>
			</div>
			<div className='w-full flex flex-col  px-[5rem]  mt-[10px] absolute top-[20px]'>
				<div className=' border-b border-white/50 h-[50px] justify-between w-full'>
					<nav className='flex justify-between items-center'>
						<h1 className='text-white'>BLU AZUR</h1>
						<ul className='flex gap-10'>
							<li><a href="" className='active:underline underline-offset-1 text-white'>A propos</a></li>
							<li><a href="" className='active:underline underline-offset-1  text-white'>Localisation</a></li>
							<li><a href="" className='active:underline underline-offset-1  text-white'>Activites</a></li>
							<li className='bg-[#4097FF]'><button>Reserve</button>
							</li>
						</ul>
					</nav>
				</div>
				<div className='flex justify-between w-full mt-[50px]'>
					<div>
						<h1 className='text-white'>
							Votre évasion<br />
							sur la Côte d’Azur !
						</h1>
						<p className='text-white mt-4 mb-4'>
							Découvrez nos offres exclusives pour des vacances inoubliables.
						</p>
						<div className='flex justify-between items-center gap-4 text-white border-1 border-solid border-white p-3 rounded-lg'>
							<button>
								<a href="">Réservez Maintenant </a>
							</button>
							<CircleChevronRight />
						</div>
					</div>
					<div >
						<button className='text-white border border-white p-3 rounded-lg'>
							<a href="">Réservez Maintenant</a>
						</button>
					</div>
				</div>
			</div>

		</div>
	</>

}
