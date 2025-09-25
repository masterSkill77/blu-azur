export const ServiceItem = ({ src, desc }) => {
	return (
		<div className=''>
			<div className='rounded-full bg-white p-12 w-[150px] h-[150px] flex items-center justify-center mx-auto'>
				<img
					src={src}
					alt={desc}
					className='object-cover '
				/>
			</div>
			<div className='text-md mt-1 mx text-white text-center font-bold w-[100px]'>
				{desc}
			</div>
		</div>
	);
};
