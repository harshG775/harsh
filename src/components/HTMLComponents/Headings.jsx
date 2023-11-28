const  className_H = `
    transition-[max-width]
    duration-100 
    
    container
    2xl:max-w-7xl

    mx-auto
    mt-6
    mb-2
    font-semibold
    capitalize
`;
const H_1 = ({ children, className, ...props }) => (
	<h1
		{...props}
		className={`
            lg:text-6xl
            text-5xl

            ${className}
            ${className_H}
            `}>
		{children}
	</h1>
);
const H_2 = ({ children, className, ...props }) => (
	<h2
		{...props}
		className={`
            lg:text-5xl
            text-4xl
            ${className}
            ${className_H}
            `}>
		{children}
	</h2>
);
const H_3 = ({ children, className, ...props }) => (
	<h3
		{...props}
		className={`
            lg:text-4xl
            text-3xl
            
            ${className}
            ${className_H}
            `}>
		{children}
	</h3>
);
const H_4 = ({ children, className, ...props }) => (
	<h4
		{...props}
		className={`
            lg:text-3xl
            text-2xl
            
            ${className}
            ${className_H}
            `}>
		{children}
	</h4>
);
const H_5 = ({ children, className, ...props }) => (
	<h5
		{...props}
		className={`
            lg:text-2xl
            text-xl
            
            ${className}
            ${className_H}
            `}>
		{children}
	</h5>
);
const H_6 = ({ children, className, ...props }) => (
	<h6
		{...props}
		className={`
            lg:text-xl
            text-lg
            
            ${className}
            ${className_H}
            `}>
		{children}
	</h6>
);
export {H_1, H_2, H_3, H_4, H_5, H_6}