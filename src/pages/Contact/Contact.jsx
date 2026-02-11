import React from "react";
import "./Contact.css";
import FormInput from "../../components/FormInput"; 
import useForm from "../../custom_hooks/useForm"; 
import validateContact from "./ValidateContact"; 

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
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit(submitForm)} className="contact-form">

        <FormInput
          label="Name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Contact;
