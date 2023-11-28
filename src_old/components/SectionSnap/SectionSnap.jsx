import "./sectionSnap.css";
export default function SectionSnap(prop) {
	return (
		<section id={prop.id} className={`scroll-snap ${prop.className}`}>
			{prop.children}
		</section>
	);
}
