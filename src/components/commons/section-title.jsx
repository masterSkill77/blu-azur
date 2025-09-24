export const SectionTitle = ({ title, subtitle, reversed, className }) => {
	return (
		<h1 className={`text-4xl mb-10 ${className}`}>
			{reversed ? (
				<>
					<span className='font-bold'>{title}</span>
					<br />
					{subtitle}
				</>
			) : (
				<>
					{title} <br />
					<span className='font-bold'>{subtitle}</span>
				</>
			)}
		</h1>
	);
};
