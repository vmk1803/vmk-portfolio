import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="matter">
        Are you looking for a fast-performing and user-friendly website to
        represent your product or business? or looking for any kind of
        consultation? or want to ask questions? or have some advice for me or
        just want to say "Hi 👋" in any case feel free to Let me know. I will do
        my best to respond back. 😊 The quickest way to reach out to me is via
        an email.
      </p>
      <a href={`mailto:${contact.email}`} target="_blan">
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
