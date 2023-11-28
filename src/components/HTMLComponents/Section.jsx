export const Section = ({className_outer,section_title,	 children, className, ...props }) => {
	return (
		<div className={`${className_outer}`}>
			{section_title && section_title}
			<section
				className={`
					${className} 
					mx-auto
					container
					2xl:max-w-7xl
				`}
				{...props}>
				{children}
			</section>
		</div>
	);
};
