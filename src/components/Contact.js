import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ padding: "50px", background: "#f4f4f4" }}>
      <h2>Contact Me</h2>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input type="text" placeholder="Your Name" style={{ margin: "5px 0", padding: "10px" }} />
        <input type="email" placeholder="Your Email" style={{ margin: "5px 0", padding: "10px" }} />
        <textarea placeholder="Your Message" style={{ margin: "5px 0", padding: "10px" }} />
        <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "#6C63FF", color: "white", border: "none" }}>Send</button>
      </form>
    </section>
  );
}

export default Contact;
