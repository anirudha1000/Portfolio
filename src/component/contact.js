import React from 'react';
import { TextField, Button, TextareaAutosize } from '@mui/material';
import Instagram from './Images/icons8-instagram-reels-50.png';
import Twitter from './Images/icons8-twitter-50.png';
import Facebook from './Images/icons8-facebook-50.png';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const sendMail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      'service_9j6ww1d',
      'template_33yot59',
      e.target,
      'c73X1yR75zwImw7cp'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.reset();
};
const Contact = () => {
  return (
    <div className=" content bg-color " id="contact-us">
      <h1>Contact</h1>
      <div className="form">
        <form autoComplete="off" onSubmit={sendMail}>
          <TextField
            required
            id="standard-full-width"
            fullWidth
            variant="filled"
            focused
            label="Name"
            name="Name"
            style={{ background: '#fff', borderRadius: 4 }}
          />

          <TextField
            required
            id="standard-full-width"
            fullWidth
            variant="filled"
            focused
            label="Email"
            name="Email"
            style={{ background: '#fff', borderRadius: 4, marginTop: 30 }}
          />

          <TextareaAutosize
            required
            aria-label="empty textarea"
            placeholder="Message"
            name="Message"
            className="text--area"
            style={{
              width: 710,
              height: 300,
              backgroundColor: 'transparent',
              borderRadius: 4,
              outline: 'none',
              color: 'white',
              fontSize: 20,
              marginTop: 30,
              padding: 10,
            }}
          />
          <br></br>
          <br></br>
          <Button type="sumbit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>

      <article className="social">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={Facebook} />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noreferrer">
          <img src={Instagram} />
        </a>
        <a
          href="https://twitter.com/i/flow/login"
          target="_blank"
          rel="noreferrer">
          <img src={Twitter} />
        </a>
      </article>
    </div>
  );
};

export default Contact;
