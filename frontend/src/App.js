import React, { useEffect, useState } from "react";
import { getProjects, getSkills } from "./services/api";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";



function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));

    getSkills()
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
      const handleScroll = () => {
        document.body.style.setProperty(
          "--scrollY",
          `${window.scrollY * 0.3}px`
        );
      };
       window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);



  return (
    <div className="App">
      <div className="neon-bg"></div>
        <Hero/>
        <Projects projects={projects}/>
        <Skills skills={skills}/>
        <Certifications/>
        <ContactForm/>
    </div>
  );
}

export default App;
