import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    {/* <img src={project.image_url} alt="" /> */}
    <div
      style={{
        backgroundImage: `url(${project.image_url})`,
        width: "100%",
        height: "220px",
        marginTop: "5px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
        target="_blan"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
        target="_blan"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;
