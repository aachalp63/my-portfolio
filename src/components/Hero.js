import React from "react";

function Hero() {
  return (
    <section style={{ height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#6C63FF", color: "white" }}>
      <h2 style={{ fontSize: "3rem" }}>Hi, I’m Aachal</h2>
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>I build web apps and portfolios</p>
      <a href="#projects" style={{ marginTop: "20px", padding: "10px 20px", background: "white", color: "#6C63FF", textDecoration: "none", borderRadius: "5px" }}>See My Work</a>
    </section>
  );
}

export default Hero;
