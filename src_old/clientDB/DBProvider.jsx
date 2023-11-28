import { useReducer } from "react";
import DBContext from "./DBContext";
import { DBReducer } from "./DBReducer";
export default function DBProvider(prop) {
	const initialState = {
        isOpen: false,
    };
	return (
		<DBContext.Provider value={useReducer(DBReducer, initialState)}>
			{prop.children}
		</DBContext.Provider>
	);
}
