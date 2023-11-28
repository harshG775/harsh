export const Section = ({ children, className_outer, className, ...props }) => {
	return (
		<div className={`${className_outer}`}>
			<section
				className={`
					${className} 
					mx-auto
					container
					2xl:max-w-7xl
				`}
				{...props}
				>
				{children}
			</section>
		</div>
	);
};
