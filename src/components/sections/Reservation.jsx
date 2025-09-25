import { CircleChevronRight } from 'lucide-react';

function Reservation() {
	return (
		<div className='w-full text-center text-white relative min-h-[80vh] flex items-center justify-center'>
			<div
				className="w-full h-full absolute bg-[linear-gradient(to_right,rgba(64,151,255,1)_0%,rgba(64,151,255,0.8)_20%,transparent_100%),url('assets/images/piscine.png')] bg-no-repeat -z-10"
				style={{
					backgroundSize: '100% 100%'
				}}></div>
			<div>
				<h1 className='text-5xl font-bold mb-10'>Réservations</h1>
				<p className='text-xl w-[40%] mx-auto'>
					{' '}
					<span className='font-bold'>
						Offrez-vous un séjour inoubliable
					</span>{' '}
					dans l’un de nos appartements Blu Azur. Profitez d’un cadre
					exceptionnel, entre confort, détente et découvertes, au cœur de
					Saint-Raphaël.
				</p>
				<button className='bg-[#4097FF] flex items-center gap-4 text-white border border-white py-3 px-6 rounded-full mt-10 font-bold mx-auto'>
					<a
						href=''
						className='whitespace-nowrap'>
						Réservez dès maintenant votre séjour !
					</a>
					<CircleChevronRight />
				</button>
			</div>
		</div>
	);
}

export default Reservation;
