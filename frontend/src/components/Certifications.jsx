import React, {useEffect, useState } from "react";
import { getCertifications } from "../services/api";
import "./css/Certifications.css";

const fallbackcertifications = [
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
  const [certifications, setCertifications ] = useState(fallbackcertifications);

  useEffect(() => {
    getCertifications()
    .then(res => {
      if (res.data && res.data.length > 0) {
        setCertifications(res.data);
      } else {
        console.log("API empty -> using fallback");
      }
    })
    .catch(err => {
      console.warn("Api failed => using fallback", err);

    });
  }, []);
    return (
        <section className="certifications">
            <h2>Certifications & Learning</h2>

            <div className="cert-slider">
                <div className="cert-track right">
                    {[...certifications, ...certifications].map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <h3>{cert.title}</h3>
                        <ul>
                        {cert.details?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                        {cert.credential_url && (
                          <a href={cert.credential_url} target="blank" rel="noreferrer" className="cert-link">
                            View Certificate
                          </a>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;