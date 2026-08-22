import { profile } from "../data/portfolio";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <p>Open to DevOps, Infrastructure, and OpenShift roles — open to relocation.</p>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
