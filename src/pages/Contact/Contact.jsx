
import React from "react";
import "./Contact.css";
import FormInput from "../../components/FormInput";
import useForm from "../../custom_hooks/useForm";
import validateContact from "./ValidateContact";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {

  const submitForm = () => {
    alert("Message sent successfully!");
  };

  const { values, errors, handleChange, handleSubmit } =
    useForm(
      { name: "", email: "", message: "" },
      validateContact
    );

  return (
    <section className="contact-page">

      <div className="contact-layout">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's Work <span>Together</span>
          </h1>

          <h2>Have a project in mind?</h2>

          <p className="contact-description">
            I'm always interested in discussing new projects,
            creative ideas, and opportunities to contribute
            to meaningful software solutions.
            Feel free to reach out!
          </p>

          {/* Contact Information */}
          <div className="contact-details">

            <div className="contact-detail-card">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <h3>Email</h3>
                <p>darshankognole001@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <h3>Location</h3>
                <p>Pune, India</p>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="contact-social">
            <span>FOLLOW ME</span>

            <div className="contact-social-links">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:darshankognole001@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="contact-form-card">

          <div className="form-heading">
            <h2>Send Me a Message</h2>
            <p>I'd love to hear from you. Let's talk!</p>
          </div>

          <form
            onSubmit={handleSubmit(submitForm)}
            className="contact-form"
          >

            <FormInput
              label="Your Name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="form-group">
              <label htmlFor="contact-message">
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={values.message}
                onChange={handleChange}
              />

              {errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
