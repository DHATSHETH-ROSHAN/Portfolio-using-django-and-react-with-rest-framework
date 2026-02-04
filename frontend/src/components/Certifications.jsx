import React from "react";
import "./css/Certifications.css";

const certifications = [
    {
        title: "IBM Data Analyst Professional Certificate",
        details: [
            "Skills: Python, Pandas, SQL, Power BI, Data Visualization",
      "Applied in: Sales Dashboard & Data Analytics projects"
        ]
    },
 {
    title: "Python – Joy of Computing (NPTEL)",
    details: [
      "Core Python, problem solving, logic building",
      "Used in data processing & analytics scripts"
    ]
  },
  {
    title: "Introduction to Machine Learning (NPTEL)",
    details: [
      "Supervised & Unsupervised learning, ML fundamentals",
      "Applied understanding in ML mini-projects"
    ]
  },
  {
    title: "Master Microsoft Excel",
    details: [
      "Advanced formulas, Pivot Tables, Data Analysis",
      "Used for reporting & performance analysis"
    ]
  }
];

function Certifications() {
    return (
        <section className="certifications">
            <h2>Certifications & Learning</h2>

            <div className="cert-slider">
                <div className="cert-track right">
                    {[...certifications, ...certifications].map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <h3>{cert.title}</h3>
                        <ul>
                        {cert.details.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;