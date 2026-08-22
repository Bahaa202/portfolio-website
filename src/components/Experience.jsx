import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.title + job.company}>
            <div className="timeline-header">
              <h3>{job.title}</h3>
              <span className="dates">{job.dates}</span>
            </div>
            <p className="company">{job.company}</p>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
