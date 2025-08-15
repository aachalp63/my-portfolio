import React from "react";

function Projects() {
  const projects = [
    { name: "Portfolio V1", link: "#" },
    { name: "Portfolio V2", link: "#" },
  ];

  return (
    <section id="projects" style={{ padding: "50px", background: "#fff" }}>
      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {projects.map((proj, idx) => (
          <a key={idx} href={proj.link} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", textDecoration: "none", color: "#333" }}>
            {proj.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
