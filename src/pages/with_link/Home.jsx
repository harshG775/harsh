import { useContext } from "react";
import Context_DB from "../../client_DB/Context_DB";
import { Actions } from "../../client_DB/ReducerDB";

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
	const [state, dispatch] = useContext(Context_DB);
	console.log(state);

	const handleClick = () => {
		dispatch({
			actionType: Actions.TOGGLE_MENU,
			payload: !state.isOpen,
		});
	};
	return (
		<>
			<Section>
				<h1 className="text-text" className=' text-primary'>Home :{`${state.isOpen}`}</h1>
				<button onClick={handleClick}>toggle</button>
				<H_1 className={"text-primary"}>Hello world</H_1>
				<button onClick={handleClick}>toggle</button>
				<H_2>Hello world</H_2>
				<button onClick={handleClick}>toggle</button>
				<H_3>Hello world</H_3>
				<button onClick={handleClick}>toggle</button>
				<H_4>Hello world</H_4>
				<button onClick={handleClick}>toggle</button>
				<H_5>Hello world</H_5>
				<button onClick={handleClick}>toggle</button>
				<H_6>Hello world</H_6>
				<button onClick={handleClick}>toggle</button>
			</Section>
		</>
	);
}
