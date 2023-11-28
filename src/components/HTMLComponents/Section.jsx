export const Section = ({ children, className, ...props }) => {
	return (
		<section
			className={`
                ${className} 
                mx-auto
				container
				2xl:max-w-7xl
				 bg-bg_1/100 
            `}
			{...props}
            >
			{children}
		</section>
	);
};
