import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from './components/About'
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from './components/Contact'

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Contact />

            <SocialLinks />
        </div>
    );
}

export default App;
