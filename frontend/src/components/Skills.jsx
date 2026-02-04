import "./css/Skills.css";


function Skills ({skills}) {
    return (
        <section className="skills">
            <h2>Skills</h2>

            <div className="skills-grid">
                {skills.map(skill => (
                    <div className="skill-card" key={skill.id}>
                        <div>
                            <span className="skill-name">{skill.name}</span>
                            <small className= "skill-category">{skill.category}
                            </small>
                        </div>
                        <div className="skill-bar">
                            <div 
                            className="skill-progress" 
                            style={{ 
                                width: `${skill.proficiency}%`, 
                                background: getLevelColor(skill.proficiency) 
                                }} 
                            />
                        </div>
                        <span className="skill-percent">{skill.proficiency}%</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

const getLevelColor = (p) => {
  if(p < 40) return "#22c55e";       // beginner
  if(p < 70) return "#f59e0b";       // intermediate
  return "#6366f1";                   // advanced
}


export default Skills;