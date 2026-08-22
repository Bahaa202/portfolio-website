import { profile } from "../data/portfolio";

function About() {
  return (
    <section className="about" id="about">
      <h2>About</h2>
      <p>{profile.summary}</p>
    </section>
  );
}

export default About;
