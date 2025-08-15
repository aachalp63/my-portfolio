import React from "react";

function Header() {
  return (
    <header style={{ padding: "20px", background: "#222", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h1>Aachal Parate</h1>
      <nav>
        <a href="#about" style={{ margin: "0 10px", color: "white" }}>About</a>
        <a href="#projects" style={{ margin: "0 10px", color: "white" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 10px", color: "white" }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
