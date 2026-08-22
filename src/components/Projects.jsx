import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a className="project-card"
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <span className="view-link">View on GitHub →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
