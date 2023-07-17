import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/home/hero/Hero";
import { About } from "./components/home/about/About";
import { Services } from "./components/home/services/Services";


export default function App() {
    return (
        <>
            <Navbar />
				<Hero/>
				<About/>
                <Services/>
                
        </>
    );
}