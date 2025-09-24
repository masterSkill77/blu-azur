import { Footer } from '@/components/footer/footer';

export const DefaultLayout = ({ children }) => {
	return (
		<div className='default-layout'>
			{children}

			<Footer />
		</div>
	);
};
