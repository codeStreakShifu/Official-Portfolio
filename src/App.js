import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './context/themeContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Services />
            <Testimonials /> *
            <Contact />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
