import "./css/Projects.css";

function Projects ({ projects }) {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img src={project.image || "/placeholder.png"}
                            alt={project.title}
                            />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                                {Array.isArray(project.project_tech) && project.project_tech.length > 0 && (
                                <div className="project-tech">
                                    {project.project_tech.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                    ))}
                                </div>
                                )}

                            <div className="project-links">
                                {project.github_link && (
                                    <a href={project.github_link} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                )}
                                {/* {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                )} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;