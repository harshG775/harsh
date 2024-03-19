import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import "./global.css";
import ContextProvider_DB from "./client_DB/ContextProvider_DB";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider_DB>
			<AppRoutes/>
		</ContextProvider_DB>
	</React.StrictMode>
);
