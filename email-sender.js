// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'ymail'
  auth: {
    user: 'leye4real@gmail.com',
    pass: 'your_email_password',
  },
});

// Email details
const mailOptions = {
  from: 'leye4real@gmail.com',
  to: 'leye4real@ymail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});