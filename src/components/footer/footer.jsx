import { Button } from '@/components/commons/button';
import { Facebook, Mail, Phone } from 'lucide-react'
export const Footer = () => {
	return (
		<div className='w-full bg-[#4097FF]'>
			<div className='flex justify-center items-center min-h-[400px] p-48 flex items-start justify-center gap-48'>
				<div className='align-center'>
					<img
						src='/images/logo.png'
						alt='Blu Azur Logo'
						className=' w-[400px] h-auto'
					/>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className="text-white text-[36px] font-bold mb-4">Contactez-nous</h1>

					<p className="flex items-center gap-3 text-white text-xl  font-bold">
						<Mail /> info@bluazur.com
					</p>

					<p className="flex items-center gap-3 text-white text-xl font-bold">
						<Phone /> +1 555 555-5555
					</p>

					<p className="flex items-center gap-3 text-white text-xl  font-bold">
						<Facebook /> BLU Azur
					</p>
				</div>

			</div>
			<div className='text-xl text-white p-4 bg-[#2161AE] min-h-[100px] text-[48.11px] flex items-center justify-center'>
				<p>&copy; Tous droits réservés à Blu Azur</p>
			</div>
		</div>
	);
};
