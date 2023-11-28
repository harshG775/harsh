import { useReducer } from "react";
import Context_DB from "./Context_DB";
import ReducerDB from "./ReducerDB";
export default function ContextProvider_DB(prop) {
	const initialState = {
		isSideBarOpen:false,
	};
	return (
		<Context_DB.Provider value={useReducer(ReducerDB, initialState)}>
			{prop.children}
		</Context_DB.Provider>
	);
}
