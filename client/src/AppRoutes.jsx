import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/with_link/Home";
import PageNotFound from "./pages/without_link/PageNotFound";

function LoadingScreen() {
  return <div>LoadingScreen</div>;
}

export default function AppRoutes() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
        {

			path:"*",
			element:<PageNotFound/>
		}
	]);
	return (
		<Suspense fallback={<LoadingScreen/>}>
			<RouterProvider router={routes} />
		</Suspense>
	);
}
