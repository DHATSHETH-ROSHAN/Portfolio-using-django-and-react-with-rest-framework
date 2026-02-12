import React, { useEffect, useState } from "react";
import { getProjects, getSkills } from "./services/api";
import "./App.css";

import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";



function App() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [confirmed, setConfirmed] = useState(false);


  useEffect(() => {
    if (!confirmed) return;

    Promise.all([getProjects(), getSkills()])
      .then(([projRes, skillRes]) => {
        setProjects(projRes.data);
        setSkills(skillRes.data);
        setTimeout(() => setLoading(false), 1500);
      })
      .catch(err => console.error(err));

    const handleScroll = () => {
      document.body.style.setProperty(
        "--scrollY",
        `${window.scrollY * 0.3}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [confirmed]);

  if (!confirmed) {
    return (
      <div className="startup-alert">
        <div className="startup-box">
          <h2>⚠ Project Setup Notice</h2>
          <p>
            If you cloned this project, kindly install dependencies properly.
            <br /><br />
            Built using:
            <br />
            <strong>React — Frontend</strong>
            <br />
            <strong>Django — Backend</strong>
            <br />
            <strong>PostgreSQL — Database</strong>
          </p>

          <button onClick={() => setConfirmed(true)}>
            Confirm & Continue
          </button>
        </div>
      </div>
    )
  }


  if (loading) return <Loader />;


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
