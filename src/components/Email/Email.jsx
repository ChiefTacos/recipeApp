'use client'
import React, { useRef, useState } from "react";
import styles from "./email.module.css";
import emailjs from "@emailjs/browser";


const Email = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false); // State for form submission

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_m96v23q",
          "template_9pogljk",
          form.current,
          "MHyRyvsumJhdD2qbi",

        )
        
        .then(
          (result) => {
            e.target.classList.add(styles.buttonPressed);
            console.log(result.text);
            console.log("message sent");
            setFormSubmitted(true); // Set the formSubmitted state to true on successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const validateForm = () => {
    const inputs = form.current.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        setError("Please fill in all fields.");
        return false;
      }
    }

    setError("");
    return true;
  };

  return (
    
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
        <input type="text" name="user_name" className={styles.input} id={styles.text}/>
        <label>Email</label>
        <input type="email" name="user_email" className={styles.input} id={styles.text}/>
        <label>Message</label>
        <textarea name="message" className={styles.input} id={styles.text}/>
        <input type="submit" value="Send" className={styles.button} />
        {isFormSubmitted && (
          <p className={styles.successMessage}>
            Your message has been successfully sent!
          </p>
        )}
        {error && <div className={styles.errorText}>{error}</div>}
      </form>
   
  );
};

export default Email;





 // <div>
      //   <form className={styles.form} onSubmit={handleOnSubmit}>
      //     <input type="text" placeholder="name" name="name" className={styles.input} />
      //     <input type="text" placeholder="email" name="email" className={styles.input} />
      //     <textarea
      //       className={styles.textArea}
      //       placeholder="message"
      //       cols="30"
      //       rows="12"
      //       name="message"
      //     ></textarea>
      //     <button className={styles.container}>Submit</button>
      //   </form>
      //   </div>