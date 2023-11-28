import { Section } from "../../components/HTMLComponents/Section";
import {
	H_1,
	H_2,
	H_3,
	H_4,
	H_5,
	H_6,
} from "../../components/HTMLComponents/Headings";

export default function Home() {

	return (
		<>
			<Section>
				<h1>Home </h1>
				<button>toggle</button>
				<H_1>Hello world</H_1>
				<button>toggle</button>
				<H_2>Hello world</H_2>
				<button>toggle</button>
				<H_3>Hello world</H_3>
				<button>toggle</button>
				<H_4>Hello world</H_4>
				<button>toggle</button>
				<H_5>Hello world</H_5>
				<button>toggle</button>
				<H_6>Hello world</H_6>
				<button>toggle</button>
			</Section>
		</>
	);
}
