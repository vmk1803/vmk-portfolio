import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => (
  <footer className="footer">
    <div id="div_top_hypers">
      <ul id="ul_top_hypers">
        <li>
          <a href="https://twitter.com/krishna_1803" target="_blan">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/vmk1803" target="_blan">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vasantha-murali-krishna-716496205/"
            target="_blan"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>
    <a href="https://github.com/vmk1803" target="_blan">
      Made with &hearts; Murali Krishna
    </a>
  </footer>
);

export default Footer;
