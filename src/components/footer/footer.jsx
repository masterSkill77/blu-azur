import { Button } from '@/components/commons/button';

export const Footer = () => {
	return (
		<div className='w-full bg-[#4097FF]'>
			<div className='min-h-[1172px] p-48 flex items-start justify-center'>
				<img
					src='/images/logo.png'
					alt='Blu Azur Logo'
					className='w-[650px] h-auto'
				/>
				<Button text='Contact Us' />
			</div>
			<div className='font-bold text-white p-4 bg-[#2161AE] h-[258px] text-[48.11px] flex items-center justify-center'>
				<p>&copy; Tous droits réservés à Blu Azur</p>
			</div>
		</div>
	);
};
