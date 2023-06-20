import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/home/hero/Hero";


function App() {
    return (
        <>
            <Navbar />
            <main>
				<Hero/>
			</main>
        </>
    );
}

export default App;
