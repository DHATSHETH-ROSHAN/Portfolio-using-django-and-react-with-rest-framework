import { useEffect } from "react";
import "./css/Hero.css"

function Hero() {

    useEffect(() => {
        const bg = document.querySelector(".neon-bg")
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      bg.style.backgroundPosition = `
        ${scrollY * 0.05}px ${scrollY * 0.08}px,
        ${scrollY * -0.04}px ${scrollY * 0.06}px,
        center
      `;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Hi!!, I'm <span>Dhatsheth Roshan</span>
                </h1>
                <h2>
                    Full-stack Developer · Data & AI Enthusiast
                </h2>

                <p>
                    MCA student passionate about building scalable web applications, data-driven systems, and AI-powered solutions. 
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn outline">
                        Contact Me
                    </a>

                </div>
            </div>
            <div className="hero-image">
                <img src="/profile.png" alt="Profile"/>
            </div>
        </section>
    );
}

export default Hero;